require("dotenv").config();
const mongoose = require('mongoose');

// Set the MongoDB connection options
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/krishna_authors_tool";

// Establish the MongoDB connection
mongoose.connect(mongoURI, mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your application or set up routes here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
