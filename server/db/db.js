import mongoose from "mongoose";
import dns from "dns";
dns.setDefaultResultOrder('ipv4first');
const URI = "mongodb://rajeshprasadh24_db_user:hTzizCNvJlR4GA53@ac-ygt3m53-shard-00-00.4d1vnev.mongodb.net:27017/movies_app?ssl=true&replicaSet=atlas-74dzxn-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("CONNECTED TO MONGOdb ATLAS");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
    }
};

export default connectDB;