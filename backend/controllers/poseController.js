import { db } from "../firebase.js";  // import the initialized db

export const getPosesByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const snapshot = await db
      .collection("Exercise")
      .where("category", "array-contains", category)
      .get();

    const poses = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(poses);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching poses");
  }
};

export const getExerciseById = async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const doc = await db.collection("Exercise").doc(exerciseId).get();

    if (!doc.exists) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching exercise" });
  }
};

export const getAllExercises = async (req, res) => {
  try {
    const snapshot = await db.collection("Exercise").get();
    const exercises = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).json({
      success: true,
      exercises,
    });
  } catch (error) {
    console.error("Error fetching exercises:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


export const getAllProblems = async (req, res) => {
  try {
    const snapshot = await db.collection("Problems").get();

    // Map documents to array
    const problems = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(problems);
  } catch (error) {
    console.error("Error fetching problems:", error);
    res.status(500).send("Error fetching problems");
  }
};