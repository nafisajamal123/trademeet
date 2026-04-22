import express from "express";
import { addHolding, getHoldings } from "../controllers/holdingController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, addHolding);
router.get("/", verifyToken, getHoldings);

export default router;