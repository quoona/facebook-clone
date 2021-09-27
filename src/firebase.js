import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmow1ZSZARmtEmNyUDGIc5Q0x64cmKNK8",
  authDomain: "facebook-clone-c418d.firebaseapp.com",
  projectId: "facebook-clone-c418d",
  storageBucket: "facebook-clone-c418d.appspot.com",
  messagingSenderId: "964582185367",
  appId: "1:964582185367:web:05e60ddbb2f4d452b78cd2",
  measurementId: "G-YRWG8DH8F2",
};
//first connect fe to be
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
// tell firebase we want google login
const provider = new firebase.auth.GoogleAuthProvider();

//two export

export { auth, provider };
export default db;
