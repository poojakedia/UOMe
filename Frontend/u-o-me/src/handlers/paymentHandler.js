import { db, auth } from "../firebaseInit"; // Use Firebase initialization
import { doc, setDoc, updateDoc } from "firebase/firestore";
import bcrypt from "bcryptjs"; // Install using: npm install bcryptjs

// Function to set default user profile values
export async function setDefaultBankingProfile() {

  try {
    const user = auth.currentUser;

    // Set default values for user profile
    const defaultValues = {
      routingNumber: "000000000",
      accountNumber: "0000000000",
      bankAccountType: "Checking"
    };

    // Reference the user's Firestore document
    const userDocRef = doc(db, "users", user.uid);

    // Set the document with default values
    await setDoc(userDocRef, defaultValues, { merge: true });

  } catch (error) {
    console.error("Error setting default profile values:", error.message);
  }
}

// Function to update user profile
export async function updateBankingProfile(routingNumber, accountNumber, bankAccountType) {

  try {
    const user = auth.currentUser;

    // Hash routing number before storing it
    let hashedRoutingNumber = "";
    if (routingNumber) {
      hashedRoutingNumber = await bcrypt.hash(routingNumber, 10);
    }

    // Hash account number before storing it
    let hashedAccountNumber = "";
    if (accountNumber) {
      hashedAccountNumber = await bcrypt.hash(accountNumber, 10);
    }

    // Reference Firestore document
    const userDocRef = doc(db, "users", user.uid);
    await updateDoc(userDocRef, {
      routingNumber: hashedRoutingNumber,
      accountNumber: hashedAccountNumber,
      bankAccountType
    });

    console.log("Banking profile updated successfully:", user);
  } catch (error) {
    console.error("Error updating banking profile:", error.message);
  }
}
