import { collection, getDocs, query } from "firebase/firestore";
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
