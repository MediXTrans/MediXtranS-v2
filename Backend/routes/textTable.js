import express from "express";
import { generateText, lastText } from "../controllers/textTable.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.post("/generate",generateText);
router.get("/get",lastText);

export default router;
