import admin from "firebase-admin";
const db = admin.firestore();

export const addToPlan = async (req, res) => {
  try {
    const { exerciseId } = req.body;
    const userId = req.user.uid;

    await db.collection("plans").doc(userId).set({
      exercises: admin.firestore.FieldValue.arrayUnion(exerciseId),
    }, { merge: true });

    res.json({ message: "Exercise added", exerciseId });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const removeFromPlan = async (req, res) => {
  try {
    const { exerciseId } = req.params;
    const userId = req.user.uid;

    await db.collection("plans").doc(userId).update({
      exercises: admin.firestore.FieldValue.arrayRemove(exerciseId),
    });

    res.json({ message: "Exercise removed", exerciseId });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// GET user's saved plan
export const getPlan = async (req, res) => {
  try {
    const userId = req.user.uid; // comes from auth middleware
    const userPlanDoc = await db.collection("plans").doc(userId).get();

    if (!userPlanDoc.exists) {
      return res.json({ success: true, plan: [] }); // empty if no plan yet
    }

    const planData = userPlanDoc.data();
    res.json({ success: true, plan: planData.exercises || [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
