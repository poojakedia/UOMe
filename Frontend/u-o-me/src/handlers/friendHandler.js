import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseInit";
import fdb from "../firebaseInit";
import { collection, getDocs, setDoc, doc, updateDoc, increment, getDoc, addDoc } from "firebase/firestore";

export async function getFriends(user_uid) {
    const friendRef = collection(fdb, "users", user_uid, "friend");
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

export async function addFriend(user_uid, friendID) {
    try {
        const friendRef = doc(fdb, "users", user_uid, "friend", friendID);
        await setDoc(friendRef, { friendID: friendID });
        console.log("Friend added successfully:", friendID);
    } catch (error) {
        console.error("Error adding friend:", error.message);
    }
}