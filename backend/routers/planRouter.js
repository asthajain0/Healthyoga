import express from "express";
import { addToPlan, removeFromPlan, getPlan } from "../controllers/planController.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", auth, addToPlan);
router.delete("/:exerciseId", auth, removeFromPlan);
router.get("/", auth, getPlan);

export default router;
