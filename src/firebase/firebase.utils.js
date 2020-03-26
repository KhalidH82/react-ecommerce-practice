import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZfuXyFoy8G1Dc6Uz5KiTVARb4o1JJik4",
  authDomain: "react-ecommerce-practice.firebaseapp.com",
  databaseURL: "https://react-ecommerce-practice.firebaseio.com",
  projectId: "react-ecommerce-practice",
  storageBucket: "react-ecommerce-practice.appspot.com",
  messagingSenderId: "451719946261",
  appId: "1:451719946261:web:963be1d225557591c02e1c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
