// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHDrbvkbYgsiyUdVsvm3lbYLYXdZQJD8g",
  authDomain: "my-next-app-a02cc.firebaseapp.com",
  projectId: "my-next-app-a02cc",
  storageBucket: "my-next-app-a02cc.appspot.com",
  messagingSenderId: "300493185173",
  appId: "1:300493185173:web:b9966698865f3eae41fb9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;