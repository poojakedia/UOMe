import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseInit';

const auth = getAuth(app);

const signInHandler = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user);
    return user; // Return the user object if needed
  } catch (error) {
    console.error("Sign In Failed:", error.message);
    alert("Sign In Failed: " + error.message);
  }
};

export default signInHandler;
