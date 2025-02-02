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
      isFavorite: userFavorites ? userFavorites.includes(doc.id) : false,
    }));

    return spaces;
  } catch (e) {
    console.error(e);
    throw new Error("Error trying to get spaces");
  }
};

// GET space
export const getSpace = async (spaceId: string) => {
  try {
    const spaceRef = doc(db, "spaces", spaceId);
    const spaceSnapshot = await getDoc(spaceRef);

    if (!spaceSnapshot.exists()) {
      console.warn("Usuário não encontrado");
      return [];
    }

    return {
      ...spaceSnapshot.data(),
      id: spaceSnapshot.id,
    };
  } catch (e) {
    console.error(e);
    throw new Error("Error trying to get space");
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

// GET my spaces
export const getMySpaces = async (userId: string, userFavorites: string[]) => {
  try {
    const spacesRef = collection(db, "spaces");

    const spacesQuery = query(spacesRef, where("ownerId", "==", userId));

    const spacesSnapshot = await getDocs(spacesQuery);

    const spaces = spacesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      isFavorite: userFavorites.includes(doc.id),
    }));

    return spaces;
  } catch (e) {
    console.error(e);
    throw new Error("Error trying to get spaces");
  }
};

// GET favorite spaces
export const getFavoriteSpaces = async (userFavorites: string[]) => {
  try {
    if (userFavorites.length === 0) {
      return [];
    }

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
