const jwt = require('jsonwebtoken');

// Middleware function to verify JWT tokens
const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({message: 'Unauthorized'});
    }
    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({message: 'Invalid token format'});
    }

    const token = authHeader.substring(7);

    try {
        const decoded = jwt.verify(token,"anythingKEY123"); // Replace with your actual secret key

        if (decoded.exp <= Math.floor(Date.now() / 1000)) {
            return res.status(401).json({message: 'Token has expired'});
        }

        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({message: 'Token is not valid'});
    }
};

module.exports = verifyToken;
