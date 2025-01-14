import { createSpace } from "../../../services/space/SpaceService";
import { useSpaceContext } from "../context/SpaceContext";

export const useSpaceActions = () => {
  const { spaces, setSpaces } = useSpaceContext();

  const handleCreateSpace = async (spaceData: any) => {
    try {
      const newSpace = await createSpace(spaceData);

      if (newSpace) {
        setSpaces([...spaces, newSpace]);
      }
    } catch (e) {
      console.error(e);
      throw new Error("Erro ao criar novo game");
    }
  };

  return { handleCreateSpace };
};
