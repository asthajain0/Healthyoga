import express from "express";
import { getPosesByCategory,getAllProblems,getExerciseById  } from "../controllers/poseController.js";

const router = express.Router();

// GET /api/poses/:category
router.get("/poses/:category", getPosesByCategory);
router.get("/problems", getAllProblems);
router.get("/id/:id", getExerciseById);

export default router;
