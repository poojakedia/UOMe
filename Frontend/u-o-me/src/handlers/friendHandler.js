import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseInit";
import fdb from "../firebaseInit";
import { collection, getDocs, setDoc, doc, updateDoc, increment, getDoc, addDoc } from "firebase/firestore";

export async function lookUp(email) {
    const userRef = collection(fdb, "users");
    const query = await getDocs(userRef);
    query.forEach((doc) => {
        if (doc.data().email === email) {
            return doc.data().id;
        }
    });
    return null;
}

export async function getFriends(userID) {
    const friendRef = collection(fdb, "users", userID, "friend");
    try {
        const snapshot = await getDocs(friendRef);
        const friends = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return friends;
    } catch (error) {
        console.error("Fetching friends failed:", error.message);
        alert("Fetching friends failed: " + error.message);
    }
}

export async function addFriend(userID, friendID) {
    try {
        const friendRef = doc(fdb, "users", userID, "friend", friendID);
        await setDoc(friendRef, { friendID: friendID });
        console.log("Friend added successfully:", friendID);
    } catch (error) {
        console.error("Error adding friend:", error.message);
    }
}