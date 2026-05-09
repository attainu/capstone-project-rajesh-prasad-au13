import mongoose from "mongoose";
import fs from "fs";

// Connect to MongoDB
const URI = "mongodb://rajeshprasadh24_db_user:hTzizCNvJlR4GA53@ac-ygt3m53-shard-00-00.4d1vnev.mongodb.net:27017/movies_app?ssl=true&replicaSet=atlas-74dzxn-shard-0&authSource=admin&retryWrites=true&w=majority";

import moviesModel from "./models/moviesModel.js";
import seriesModel from "./models/seriesModel.js";
import trendingToday from "./models/trendingToday.js";
import userModel from "./models/userModel.js";

const seedData = async () => {
    try {
        await mongoose.connect(URI, {
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connected to MongoDB Atlas for seeding...");

        // Read the sampleData.json file
        const data = JSON.parse(fs.readFileSync('./sampleData.json', 'utf-8'));

        // Clear existing data to avoid duplicates
        await moviesModel.deleteMany();
        await seriesModel.deleteMany();
        await trendingToday.deleteMany();
        await userModel.deleteMany();
        console.log("Cleared existing collections.");

        // Insert new data
        if (data.movies && data.movies.length > 0) {
            await moviesModel.insertMany(data.movies);
            console.log(`Inserted ${data.movies.length} movies.`);
        }
        if (data.tvseries && data.tvseries.length > 0) {
            await seriesModel.insertMany(data.tvseries);
            console.log(`Inserted ${data.tvseries.length} tv series.`);
        }
        if (data.trends && data.trends.length > 0) {
            await trendingToday.insertMany(data.trends);
            console.log(`Inserted ${data.trends.length} trending items.`);
        }
        if (data.users && data.users.length > 0) {
            await userModel.insertMany(data.users);
            console.log(`Inserted ${data.users.length} users.`);
        }

        console.log("Database successfully seeded!");
        process.exit();
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};

seedData();
