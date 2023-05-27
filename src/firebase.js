import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyCT8NFghjHZ-s79XUA9wvHZOLNuVXcNNlU",
  authDomain: "jodiexpress2.firebaseapp.com",
  projectId: "jodiexpress2",
  storageBucket: "jodiexpress2.appspot.com",
  messagingSenderId: "417080760406",
  appId: "1:417080760406:web:7f514534de7d29f155c3f7",
  measurementId: "G-WMVDY5GVQE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export { app, auth, storage ,ref };


