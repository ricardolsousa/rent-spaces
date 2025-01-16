import { useEffect, useState } from "react";
import { getUserFavorites } from "../../../services/user/UserService";
import {
  getFavoriteSpaces,
  getMySpaces,
  getSpaces,
} from "../../../services/space/SpaceService";

export const useSpaces = ({ userId, pageType }: any) => {
  const [spaces, setSpaces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpaces = async () => {
      setLoading(true);
      setError(null);

      try {
        const userFavorites = await getUserFavorites(userId); // Buscar favoritos do usuário
        let fetchedSpaces: any[] = [];

        if (pageType === "all") {
          fetchedSpaces = await getSpaces(userFavorites); // Todos os espaços
        } else if (pageType === "mySpaces") {
          fetchedSpaces = await getMySpaces(userId, userFavorites); // Meus espaços
        } else if (pageType === "favorites") {
          fetchedSpaces = await getFavoriteSpaces(userFavorites); // Favoritos
        }

        setSpaces(fetchedSpaces);
      } catch (e) {
        setError((e as Error).message || "Erro ao carregar espaços");
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, [userId, pageType]);

  return { spaces, loading, error };
};
