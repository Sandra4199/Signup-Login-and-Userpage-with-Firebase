import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6YPZk3Fvuka1WrhzxLJ2C2eORVlTXmDg",
  authDomain: "my-react-firebase-6a2cd.firebaseapp.com",
  projectId: "my-react-firebase-6a2cd",
  storageBucket: "my-react-firebase-6a2cd.appspot.com",
  messagingSenderId: "56140244388",
  appId: "1:56140244388:web:b8a7ce24f7f1659c0d4d31",
  measurementId: "G-SGKGD8ZDL5",
};
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
