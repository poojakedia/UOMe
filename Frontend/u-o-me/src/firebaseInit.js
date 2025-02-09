// firebaseInit.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Make sure the environment variables are correctly named and defined
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optionally initialize other services
export const analytics = getAnalytics(app);
export const fdb = getFirestore(app);

// Export the app instance as the default export
export default app;
