/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyATfI86GBWoWFQzxjj6la4bXeenhKq6qI8",
  authDomain: "instantchat-d7e39.firebaseapp.com",
  projectId: "instantchat-d7e39",
  storageBucket: "instantchat-d7e39.appspot.com",
  messagingSenderId: "125056619434",
  appId: "1:125056619434:web:3974ee2e7dbd6c4e5ad1d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);