// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getfirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuRGkM_Cen2Ik1ZV1f37W2B_QaoD1JSJQ",
    authDomain: "react-chat-app-2-24e00.firebaseapp.com",
    projectId: "react-chat-app-2-24e00",
    storageBucket: "react-chat-app-2-24e00.appspot.com",
    messagingSenderId: "244843804677",
    appId: "1:244843804677:web:76ecb9ad7c5607aa15c46c",
    measurementId: "G-HWLZ55EQ4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getfirestore;