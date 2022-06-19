// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxoSpjet151XAyYdf19eAnHISfkMJxjxU",
  authDomain: "facebook-clone-f5f27.firebaseapp.com",
  projectId: "facebook-clone-f5f27",
  storageBucket: "facebook-clone-f5f27.appspot.com",
  messagingSenderId: "502061313836",
  appId: "1:502061313836:web:96ec5ffe27397553c08689",
  measurementId: "G-SS3PGBEKLP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
