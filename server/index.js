const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Sample route
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
