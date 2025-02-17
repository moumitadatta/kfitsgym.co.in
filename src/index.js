// required('dotenv').config({path: './env'})
// import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import connectDB from "./db/index";

// console.log('Current directory:', __dirname);  // Log the current working directory

// dotenv.config({
//     path: './env'
// })

// connectDB()




import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

// Listen for any warnings in the process (e.g., deprecation warnings)
process.on('warning', (warning) => {
  console.warn(warning.name); // Process any deprecation warnings
});

dotenv.config(); // Load environment variables

console.log('MongoDB URI:', process.env.MONGODB_URI);  // Log to verify the connection string

const app = express();

(async () => {
    try {
        // No need to pass useNewUrlParser and useUnifiedTopology anymore
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
})();


