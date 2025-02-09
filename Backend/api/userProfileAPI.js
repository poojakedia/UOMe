import { db, auth } from "../firebaseInit"; // Use Firebase initialization
import { doc, setDoc, updateDoc } from "firebase/firestore";
import bcrypt from "bcryptjs"; // Install using: npm install bcryptjs
import requestIp from "request-ip"; // Install using: npm install request-ip

// Function to set default user profile values
export async function setDefaultUserProfile(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const user = auth.currentUser;

    // Checks if user is authorized
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
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
    const userDocRef = doc(db, "users", user.uid);

    // Set the document with default values
    await setDoc(userDocRef, defaultValues, { merge: true });

    return res.status(200).json({ message: "Default profile values set successfully" });
  } catch (error) {
    console.error("Error setting default profile values:", error.message);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}

// Function to update user profile
export async function updateUserProfile(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const user = auth.currentUser;

    // Checks if user is authorized
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Get data from the request body
    const { dateOfBirth, ssn, address1, city, state, postalCode } = req.body;

    // Hash SSN before storing it
    let hashedSSN = "";
    if (ssn) {
      hashedSSN = await bcrypt.hash(ssn, 10); // Hash SSN securely
    }

    // Get user’s IP Address
    const ipAddress = requestIp.getClientIp(req) || "Unknown IP";

    // Reference Firestore document
    const userDocRef = doc(db, "users", user.uid);
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

    return res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating user profile:", error.message);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
