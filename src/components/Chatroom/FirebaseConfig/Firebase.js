import firebase from "firebase";

const Config = {
 {/* Use your firebase config*/}
};

const firebaseApp = firebase.initializeApp(Config);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
