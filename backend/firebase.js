// firebase.js
import admin from "firebase-admin";
import { readFileSync } from "fs";

// load service account key
const serviceAccount = JSON.parse(
  readFileSync("./serviceAccountKey1.json", "utf8")
);

// initialize firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

admin.firestore().settings({ ignoreUndefinedProperties: true }); 

export const db = admin.firestore();
export default admin;
