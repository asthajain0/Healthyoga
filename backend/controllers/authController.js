import { db } from "../firebase.js"; // Firestore for storing users
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//const JWT_SECRET = process.env.JWT_SECRET_KEY; // keep it in env variables

// Signup
export const signupController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ success: false, message: "All fields are required" });

  try {
    // Check if user exists
    const snapshot = await db.collection("users").where("email", "==", email).get();
    if (!snapshot.empty)
      return res.status(400).json({ success: false, message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add user to Firestore
    const userRef = db.collection("users").doc();
    await userRef.set({ name, email, password: hashedPassword, createdAt: new Date().toISOString() });

    // Generate JWT
    const token = jwt.sign({ uid: userRef.id, email }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ success: true, token, uid: userRef.id, name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Login
export const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ success: false, message: "All fields are required" });

  try {
    const snapshot = await db.collection("users").where("email", "==", email).get();
    if (snapshot.empty) return res.status(400).json({ success: false, message: "User not found" });

    const userDoc = snapshot.docs[0];
    const user = userDoc.data();

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid password" });

    const token = jwt.sign({ uid: userDoc.id, email }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ success: true, token, uid: userDoc.id, name: user.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
