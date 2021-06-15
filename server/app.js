import express from "express";
const app = express();
import cors from "cors";
const port = process.env.PORT || 3000;
import connect from "./db/db.js";
import movieRoutes from "./routes/moviesRoutes.js";
connect();

app.use(express.json());
app.use(cors());

app.use("/movies", movieRoutes);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});