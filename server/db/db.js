import mongoose from "mongoose";

const URI = "mongodb+srv://rajesh:rajesh24@cluster0.l4c3s.mongodb.net/movies_app?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    console.log("CONNECTED TO MONGOdb ATLAS");
};
export default connectDB;