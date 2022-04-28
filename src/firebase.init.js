// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHSh9_Ivd-URMICEhG2PZkpWKGcCe00YU",
  authDomain: "inventory-app-6da6a.firebaseapp.com",
  projectId: "inventory-app-6da6a",
  storageBucket: "inventory-app-6da6a.appspot.com",
  messagingSenderId: "85718189923",
  appId: "1:85718189923:web:6aaf8cc1ff8bc392bef556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;