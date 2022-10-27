// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
    // appId: process.env.REACT_APP_APP_ID
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    // new: process.env.REACT_APP_NOT_SECRET_CODE
    apiKey: "AIzaSyAm5pRxc3w9AHWuxlhpxK88V_Tpf40RtYo",
    authDomain: "e-learning-house.firebaseapp.com",
    projectId: "e-learning-house",
    storageBucket: "e-learning-house.appspot.com",
    messagingSenderId: "670392423675",
    appId: "1:670392423675:web:61a26bd7ea7fa7e916cc5e"
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;