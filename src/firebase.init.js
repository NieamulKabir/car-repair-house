// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS8dTJvHk3g3qEEk1A1RGv3j6ml3akc68",
  authDomain: "car-repair-house.firebaseapp.com",
  projectId: "car-repair-house",
  storageBucket: "car-repair-house.appspot.com",
  messagingSenderId: "927830024240",
  appId: "1:927830024240:web:a3fbb16218b8a0e5518df5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;