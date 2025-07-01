// backend/index.js

const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");

const app = express();

// MongoDB connection
mongoose.connect('mongodb+srv://kehjaredjk:P0kemon2001@cluster0.svsxt.mongodb.net/math', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to yourDB-name database');
}).catch((err) => {
    console.log('Error connecting to database', err);
});

// Schema for users of the app
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('users', UserSchema);

// Express setup
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // React frontend URL
}));

// Sample route to check if the backend is working
app.get("/", (req, resp) => {
    resp.send("App is working");
});

// API to register a user
app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        if (result) {
            delete result.password; // Ensure you're not sending sensitive info
            resp.status(201).send(result); // Send successful response
        } else {
            console.log("User already registered");
            resp.status(400).send("User already registered");
        }
    } catch (e) {
        resp.status(500).send({ message: "Something went wrong", error: e.message });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("App is running on port 3000");
});