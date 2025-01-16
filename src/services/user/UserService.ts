import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const getUserFavorites = async (userId: string): Promise<string[]> => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {
      console.warn("Usuário não encontrado");
      return [];
    }

    const userData = userSnapshot.data();
    return userData?.favoriteSpaces || [];
  } catch (e) {
    console.error("Erro ao buscar favoritos do usuário:", e);
    throw new Error("Erro ao buscar favoritos");
  }
};
