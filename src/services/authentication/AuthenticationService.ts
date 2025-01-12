import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// LOGIN with email and password
export const login = async (email: string, password: string) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (userCredentials?.user) {
      return userCredentials.user;
    }

    return null;
  } catch (e) {
    throw e;
  }
};

// REGISTER with email and password
export const register = async (
  email: string,
  password: string,
  userType: "owner" | "renter"
) => {
  try {
    // Register user with email/password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (userCredential.user) {
      // Add to users collection
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email,
        userType,
      });

      return userCredential.user;
    }

    return null;
  } catch (e) {
    throw e;
  }
};

// LOGOUT
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    throw e;
  }
};

// GET user details by id
export const getUserById = async (userId: string) => {
  try {
    const userRef = doc(db, `/users/${userId}`);

    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      return userSnapshot.data();
    } else {
      throw new Error("User not found");
    }
  } catch (e) {
    console.error(e);
    throw new Error("Error trying to get user by id");
  }
};
