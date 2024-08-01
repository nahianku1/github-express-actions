import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*", credentials: true }));

app.get("/", (req, res) => {
  res.send(`Server Deployment Successful!`);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
