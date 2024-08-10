// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-b0SGIFHXDOSsDm_0LYYUMR3Raa-lrvU",
  authDomain: "blabber-2e8da.firebaseapp.com",
  projectId: "blabber-2e8da",
  storageBucket: "blabber-2e8da.appspot.com",
  messagingSenderId: "865941255340",
  appId: "1:865941255340:web:87efe4ae40b7b771535b09",
  measurementId: "G-L75XZ8DXCZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Get DB
export const db = getFirestore();
