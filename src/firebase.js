// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlnDB1uvXpn1foGHoMf3sYhsffmuxs-20",
    authDomain: "firebasics-31e7a.firebaseapp.com",
    projectId: "firebasics-31e7a",
    storageBucket: "firebasics-31e7a.appspot.com",
    messagingSenderId: "227656448424",
    appId: "1:227656448424:web:886e5e50de8908296e859d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
