// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLukmfsGUifxkC05-VYA_S1TUkVcao0zw",
  authDomain: "coffee-store-app-b644f.firebaseapp.com",
  projectId: "coffee-store-app-b644f",
  storageBucket: "coffee-store-app-b644f.firebasestorage.app",
  messagingSenderId: "1037802084291",
  appId: "1:1037802084291:web:cf45237624d6f669fb0f76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);