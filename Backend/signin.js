import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed in:", user);
        return user; // You can return the user object if needed
    } catch (error) {
        console.error("Sign In Failed:", error.message);
        alert("Sign In Failed:" + error.message)
    }
};
