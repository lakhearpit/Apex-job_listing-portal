// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHcFs9f-C_WZc8h9Oo9_3m0IpqvI5mp-0",
  authDomain: "online-job-portal-8048e.firebaseapp.com",
  projectId: "online-job-portal-8048e",
  storageBucket: "online-job-portal-8048e.appspot.com",
  messagingSenderId: "598924766257",
  appId: "1:598924766257:web:594e5bdca13843eceb7910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};