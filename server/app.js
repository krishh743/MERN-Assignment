
const express = require('express');
const path = require('path');
// const blogController = require("./controllers/blogController");
// const getImage = require("./controllers/downloadImage");
const app = express();
const fileUpload = require('express-fileupload');
app.set('views', path.join(__dirname, 'views'));

require("dotenv").config();
const port = 5000;

const cors = require ('cors');

require("./db/conn");
app.use(express.static('public'));
app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.set('view engine', 'ejs');


// Import Router file
const userRoute = require('./routes/userRoute');
const authRoute = require("./routes/authRoute");

// All rountes
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)

//Get a specific blog by unique slug (EJS)

/* app.get('/test',(req,res)=>{
    res.render('blog')
}) */

// Listen On port 8000
app.listen(port, () => {
    console.log(`server is running on : ${port}`)
})