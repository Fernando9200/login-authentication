import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwqG-ihdVLQI-Z_AyGZwK6luuHssbG8OY",
  authDomain: "login-authentication-98e32.firebaseapp.com",
  projectId: "login-authentication-98e32",
  storageBucket: "login-authentication-98e32.appspot.com",
  messagingSenderId: "677635736979",
  appId: "1:677635736979:web:ba23670ae5218e4bc31466",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
