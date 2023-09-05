import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const fireKey = import.meta.env.VITE_FIRE_KEY;
const fireIp = import.meta.env.VITE_IP;
const fireMessage = import.meta.env.VITE_MESSAGE;

const firebaseConfig = {
  apiKey: fireKey,
  authDomain: "miniblog-2518b.firebaseapp.com",
  projectId: "miniblog-2518b",
  storageBucket: "miniblog-2518b.appspot.com",
  messagingSenderId: fireMessage,
  appId: fireIp,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };