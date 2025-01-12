import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

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
