// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMUbuUiULS8RXy2JpvHdxot_7na_TOB2s",
  authDomain: "react-todo-list-8aaa9.firebaseapp.com",
  projectId: "react-todo-list-8aaa9",
  storageBucket: "react-todo-list-8aaa9.appspot.com",
  messagingSenderId: "7975860894",
  appId: "1:7975860894:web:0b4498c45baf1166a9d98f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); 
export const todoCollections = collection(db,"Todos");