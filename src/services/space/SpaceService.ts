import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

// GET spaces
export const getSpaces = async (userFavorites?: string[]) => {
  try {
    const spacesRef = collection(db, "spaces");

    const spacesQuery = query(spacesRef);

    const spacesSnapshot = await getDocs(spacesQuery);

    const spaces = spacesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      isFavorite: userFavorites?.find((id: string) => id === doc.id),
    }));

    return spaces;
  } catch (e) {
    console.error(e);
    throw new Error("Error trying to get spaces");
  }
};

// CREATE space
export const createSpace = async (space: any) => {
  try {
    const spaceRef = collection(db, "spaces");

    const spaceSnapshot = await addDoc(spaceRef, {
      createdAt: new Date(),
      updatedAt: new Date(),
      ...space,
    });

    const newSpace = await getDoc(spaceSnapshot);

    if (newSpace.exists()) {
      return {
        id: newSpace.id,
        ...newSpace.data(),
      };
    } else {
      throw new Error("Created space not found");
    }
  } catch (e) {
    console.error(e);
    throw new Error("Error trying to create space");
  }
};

// GET favorite spaces
export const getFavoriteSpaces = async (userFavorites: string[]) => {
  try {
    const spacesRef = collection(db, "spaces");

    const spacesQuery = query(
      spacesRef,
      where("__name__", "in", userFavorites)
    );

    const spacesSnapshot = await getDocs(spacesQuery);

    const spaces = spacesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      isFavorite: true,
    }));

    return spaces;
  } catch (e) {
    console.error(e);
    throw new Error("Error trying to get spaces");
  }
};

// ADD space to favorite
export const addSpaceToFavorites = async (spaceId: string, userId: string) => {
  try {
    const userRef = doc(db, "users", userId);

    await updateDoc(userRef, {
      favoriteSpaces: arrayUnion(spaceId),
    });
  } catch (e) {
    console.error(e);
    throw new Error("Error trying to add space to favorite");
  }
};

// REMOVE space to favorite
export const removeSpaceFromFavorites = async (
  spaceId: string,
  userId: string
) => {
  try {
    const userRef = doc(db, "users", userId);

    await updateDoc(userRef, {
      favoriteSpaces: arrayRemove(spaceId),
    });
  } catch (e) {
    console.error(e);
    throw new Error("Error trying to remove space to favorite");
  }
};
