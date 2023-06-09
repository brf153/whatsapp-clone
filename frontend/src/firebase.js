// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtyvtPDzXuNjnAE-xXLV7ILhae-stvuhg",
  authDomain: "whatsapp-clone-cb2e4.firebaseapp.com",
  projectId: "whatsapp-clone-cb2e4",
  storageBucket: "whatsapp-clone-cb2e4.appspot.com",
  messagingSenderId: "394967985779",
  appId: "1:394967985779:web:166c2cd129c61438c84406",
  measurementId: "G-HQ8MPNSPHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);