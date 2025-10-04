// firebase.js
import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();
//import { readFileSync } from "fs";

// load service account key
// const serviceAccount = JSON.parse(
//   readFileSync("./serviceAccountKey1.json", "utf8")
// );

// initialize firebase
admin.initializeApp({
  credential: admin.credential.cert({
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

admin.firestore().settings({ ignoreUndefinedProperties: true }); 

export const db = admin.firestore();
export default admin;
