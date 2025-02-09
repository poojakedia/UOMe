// firebaseInit.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Make sure the environment variables are correctly named and defined
const firebaseConfig = {
  apiKey: "AIzaSyBU5DaQjofn9M-TNS0ASpugf1s0vvU9K0c",
  authDomain: "uome-34306.firebaseapp.com",
  projectId: "uome-34306",
  storageBucket: "uome-34306.firebasestorage.app",
  messagingSenderId: "846304546211",
  appId: "1:846304546211:web:511f4e852697a33f859e16",
  measurementId: "G-WKDNZ9ZCQX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optionally initialize other services
export const analytics = getAnalytics(app);
export const fdb = getFirestore(app);

// Export the app instance as the default export
export default app;
