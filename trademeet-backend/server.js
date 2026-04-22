import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";

import { connectToSocket } from "./socket.js"; // 👈 IMPORTANT

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// create HTTP server
const server = http.createServer(app);

// 🔥 CONNECT SOCKET HERE
connectToSocket(server);

// routes
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

import { verifyToken } from "./middleware/authMiddleware.js";
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({
    message: "You are authorized ✅",
    userId: req.user.id,
  });
});

import holdingRoutes from "./routes/holdingRoutes.js";
app.use("/api/holdings", holdingRoutes);

// connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// start server
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});