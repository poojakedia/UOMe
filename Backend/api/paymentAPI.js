import { db, auth } from "../firebaseInit"; // Use Firebase initialization
import { doc, setDoc, updateDoc } from "firebase/firestore";
import bcrypt from "bcryptjs"; // Install using: npm install bcryptjs

// Function to set default user profile values
export async function setDefaultBankingProfile(req, res) {
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
      routingNumber: "000000000",
      accountNumber: "0000000000",
      bankAccountType: "Checking"
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
export async function updateBankingProfile(req, res) {
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
    const { routingNumber, accountNumber, bankAccountType } = req.body;

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

    return res.status(200).json({ message: "Banking profile updated successfully" });
  } catch (error) {
    console.error("Error updating banking profile:", error.message);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
