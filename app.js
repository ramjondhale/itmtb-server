import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import recommendationRoutes from "./routes/recommendations.js";

const localUrl = "mongodb://localhost/ITMTB";
dotenv.config();

const PORT = process.env.PORT || 9000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/recommendation", recommendationRoutes);
app.get("/", (req, res) => {
  res.send("Hello to ITMTB API");
});

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));
