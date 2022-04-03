// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw1K_MdwLQ0UyKSCDpjGdW1vfnANH1lbo",
  authDomain: "aromahome-ornellaramos.firebaseapp.com",
  projectId: "aromahome-ornellaramos",
  storageBucket: "aromahome-ornellaramos.appspot.com",
  messagingSenderId: "50295684875",
  appId: "1:50295684875:web:6158b1ed197d49f3572c0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export db
export const db = getFirestore(app)