import express from "express";
import cors from "cors";
import poseRouter from "./routers/poseRouter.js";
import "./firebase.js"; // make sure firebase is imported first
import { db } from "./firebase.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", poseRouter);

app.post("/api/exercises", async (req, res) => {
  try {
    const data = req.body;                // Step 2
    if (!data || !data.id) {
      return res.status(400).json({ error: "Data must have an 'id' field" });
    }

    const docId = data.id;                 // Use the id from JSON
    const cleanData = JSON.parse(JSON.stringify(data));

    // Set document with custom ID
    await db.collection("Exercise").doc(docId).set(cleanData);

    res.status(201).json({ id: docId, message: "Exercise added successfully with custom ID!" }); 
  } catch (err) {
    res.status(500).send(err.message);    // Step 5
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
