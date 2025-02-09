import { getAuth } from "firebase/auth";
import app from "../firebaseInit";
import fdb from "../firebaseInit";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import bcrypt from "bcryptjs"; // Install using: npm install bcryptjs

// Function to set default user profile values
export async function setDefaultUserProfile() {
  try {
    const user = getAuth(app);

    // Check if the user is authenticated
    if (!user) {
      return console.error("User is not authenticated.");
    }

    // Set default values for user profile
    const defaultValues = {
      dateOfBirth: "2000-01-01",
      ssn: "xxxx", // Empty as placeholder
      address1: "123 Default St",
      city: "Default City",
      state: "Default State",
      postalCode: "00000",
      ipAddress: "Unknown IP",
    };

    // Reference the user's Firestore document
    const userDocRef = doc(fdb, "users", user.uid);

    // Set the document with default values
    await setDoc(userDocRef, defaultValues, { merge: true });

    console.log("Default profile values set successfully");
  } catch (error) {
    console.error("Error setting default profile values:", error.message);
  }
}

// Function to update user profile
export async function updateUserProfile(dateOfBirth, ssn, address1, city, state, postalCode) {
  try {
    const user = getAuth(app);

    // Check if the user is authenticated
    if (!user) {
      return console.error("User is not authenticated.");
    }

    // Hash SSN before storing it
    let hashedSSN = "";
    if (ssn) {
      hashedSSN = await bcrypt.hash(ssn, 10); // Hash SSN securely
    }

    // Get user's IP address
    const ipAddress = "Unknown IP";

    // Reference Firestore document
    const userDocRef = doc(fdb, "users", user.uid);
    await updateDoc(userDocRef, {
      dateOfBirth,
      ssn: hashedSSN,
      address1,
      city,
      state,
      postalCode,
      ipAddress,
    });

    console.log("Profile updated successfully:", user);
  } catch (error) {
    console.error("Error updating user profile:", error.message);
  }
}
