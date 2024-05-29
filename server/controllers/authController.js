const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const admin = require('firebase-admin');
const mongooseAsync = require('mongoose-async');

// const serviceAccount = require('../config/zebralearn-blog-firebase-adminsdk-xpe04-d302ebf319.json');
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
// });

// Register the user
const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: 'Email already in use'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({username, email, password: hashedPassword});
        await user.save();

        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        res.status(500).json({message: 'Registration failed'});
    }
};


// Login the user
const login = async (req, res) => {
    console.log(req.body,"body")
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(401).json({message: 'Invalid credentials'});
        }
        //const isMatch = await user.comparePassword(password);
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(passwordMatch,password,user.password,"login data")
        if (passwordMatch) {

            const token = jwt.sign({id: user.id, username: user.username}, "anythingKEY123", {
                expiresIn: '48h',
            });
            res.status(200).json({token, user});
        } else {
            return res.status(401).json({message: 'Invalid credentials'});
        }
    } catch (error) {
        res.status(500).json({message: 'Login failed'});
    }
};




const googleLogin = async (req, res) => {
    const { name, email, uid,token } = req.body;

    const decodedToken = await admin.auth().verifyIdToken(token);
    const userId = decodedToken.uid;

    try {
        const existingUser = await User.findOne({ uid });
        if (existingUser) {
            existingUser.username = name;
            existingUser.email = email;
            if (userId) {
                const token = jwt.sign({id: userId, username:name}, "anythingKEY123", {
                    expiresIn: '48h',
                });
                await existingUser.save();
                res.status(200).json({token,user:existingUser});
            } else {
                return res.status(401).json({message: 'Invalid credentials'});
            }

        } else {
            const newUser = new User({
                username:name,
                email,
                uid,
            });
            if (userId) {
                const token = jwt.sign({id: userId, username:name}, "anythingKEY123", {
                    expiresIn: '1h',
                });
                await newUser.save();
                res.status(200).json({token, user:newUser});
            } else {
                return res.status(401).json({message: 'Invalid credentials'});
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error processing request');
    }
};

module.exports = {
    register,
    login,
    googleLogin
}