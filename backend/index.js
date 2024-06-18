var express = require("express");
var app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require('dotenv').config();
const port = process.env.PORT || 8000;
var cors = require('cors');

// Debugging: Check if the environment variable is loaded
console.log("Database URL:", process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL environment variable not set");
    process.exit(1); // Exit the application with an error code
}

mongoose.connect(process.env.DATABASE_URL, { 
    serverSelectionTimeoutMS: 5000 // Adjust the timeout as needed
})
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const corsOptions = {
    origin: 'https://search-projects.vercel.app', // Allow this origin
    methods: ['GET', 'POST'], // Allow these HTTP methods
    credentials: true, 
};

app.use(cors(corsOptions));

var stuRoute = require("./routes/students");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/student", stuRoute);

app.listen(port, () => {
    console.log("App running on port: " + port);
});
