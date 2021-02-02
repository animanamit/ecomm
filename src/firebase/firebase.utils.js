import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyASmAyDGBAGvI-8LHTgyvzke8MC07ZQVpc",
  authDomain: "ecommerce-81098.firebaseapp.com",
  projectId: "ecommerce-81098",
  storageBucket: "ecommerce-81098.appspot.com",
  messagingSenderId: "487101501246",
  appId: "1:487101501246:web:fd0474c033068af12f666f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
