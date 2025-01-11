import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

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
export const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (userCredential.user) {
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
