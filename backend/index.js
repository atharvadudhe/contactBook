import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URL = process.env.URL;

app.use(express.json());
app.use(cors());
app.use('/api', router);

mongoose.connect(URL)
.then(() => console.log(`Connected to DB!`))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Contact Books Backend</h1>');
});

app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
})