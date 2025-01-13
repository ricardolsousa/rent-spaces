import { addDoc, collection, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/firebase";

// GET spaces
export const getSpaces = async () => {
  try {
    const spacesRef = collection(db, "spaces");

    const spacesQuery = query(spacesRef);

    const spacesSnapshot = await getDocs(spacesQuery);

    const spaces = spacesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
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
