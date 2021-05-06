import firebase from "firebase-admin";
import serviceAccount from "../serviceAccountKey.json";

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

const db = firebase.firestore();

export default db;
