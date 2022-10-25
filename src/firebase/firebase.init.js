// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAm5pRxc3w9AHWuxlhpxK88V_Tpf40RtYo",
    authDomain: "e-learning-house.firebaseapp.com",
    projectId: "e-learning-house",
    storageBucket: "e-learning-house.appspot.com",
    messagingSenderId: "670392423675",
    appId: "1:670392423675:web:61a26bd7ea7fa7e916cc5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;