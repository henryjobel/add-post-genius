// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf1kwoQTrA3ITeC6TptjqHQmqRhQGVOuw",
    authDomain: "add-post-genius-203b0.firebaseapp.com",
    projectId: "add-post-genius-203b0",
    storageBucket: "add-post-genius-203b0.appspot.com",
    messagingSenderId: "1018116663158",
    appId: "1:1018116663158:web:fb85d7735588574f8d3c57"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app