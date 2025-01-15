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
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getUserById } from "../authentication/AuthenticationService";

// GET spaces
export const getSpaces = async (userId?: string) => {
  try {
    const spacesRef = collection(db, "spaces");

    const spacesQuery = query(spacesRef);

    const spacesSnapshot = await getDocs(spacesQuery);

    let favoriteSpaceIds: string[] = [];
    if (userId) {
      const user = await getUserById(userId);

      favoriteSpaceIds = user.favoriteSpaces || [];
    }

    const spaces = spacesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      isFavorite: favoriteSpaceIds?.find((id: string) => id === doc.id),
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
