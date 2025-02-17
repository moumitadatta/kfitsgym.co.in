import express from 'express';  // Use import for express
import mongoose from 'mongoose';  // Use import for mongoose
import dotenv from 'dotenv';  // Use import for dotenv

dotenv.config();  // Load environment variables

console.log('MONGO_URI:', process.env.MONGO_URI);  // Check specific variable

const app = express();

// Change port to 5000 if the environment variable is not set
const port = process.env.PORT || 5000;  // Use port 5000 by default

// Log MongoDB URI to check if it's loaded correctly
console.log('MongoDB URI:', process.env.MONGO_URI);

// Check if the MONGO_URI environment variable is available
if (!process.env.MONGO_URI) {
  console.error("MongoDB URI is not defined. Please check your .env file.");
  process.exit(1); // Exit the application if the URI is undefined
}

const dbURI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose (no deprecated options)
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
