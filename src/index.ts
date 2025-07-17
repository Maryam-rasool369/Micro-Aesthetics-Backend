import express from "express";
import dotenv from "dotenv"
import connectDB from "./Database/db";
import cors from "cors";
import serviceRoutes from "./Routes/serviceResult"


const app = express();
dotenv.config();

// Connect to MongoDB
connectDB();

// MIddlewares
app.use(cors())

app.use("/dashboard",serviceRoutes)


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})