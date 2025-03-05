require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for frontend communication
app.use(morgan("dev")); // Logger for API requests

// Connect to Database
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("TaskFlow API is running...");
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
