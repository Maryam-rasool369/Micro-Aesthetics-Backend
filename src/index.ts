import express from "express";
import dotenv from "dotenv"
import connectDB from "./Database/db";
import cors from "cors";


const app = express();
dotenv.config();

// Connect to MongoDB
connectDB();

// MIddlewares
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

console.log("MONGO_URI from env: ", process.env.MONGO_URI);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})