import { createSpace } from "../../../services/space/SpaceService";
import { useSpaceContext } from "../context/SpaceContext";

export const useSpaceActions = () => {
  const { setSpaces } = useSpaceContext();

  // POST space
  const handleCreateSpace = async (spaceData: any) => {
    try {
      const newSpace = await createSpace(spaceData);

      if (newSpace) {
        setSpaces((prevSpaces) => [...prevSpaces, newSpace]);
      }
    } catch (e) {
      console.error(e);
      throw new Error("Erro trying to create space");
    }
  };

  return { handleCreateSpace };
};
