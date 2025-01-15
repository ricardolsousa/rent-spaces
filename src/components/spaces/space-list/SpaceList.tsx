import { useEffect, useState } from "react";
import SpaceCard from "../space-card/SpaceCard";
import { useSpaceContext } from "../context/SpaceContext";
import { getSpaces } from "../../../services/space/SpaceService";

const SpaceList = () => {
  const { spaces, setSpaces } = useSpaceContext();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleGetSpaces = async () => {
      console.log("entrei");
      setLoading(true);
      try {
        const spaces = await getSpaces();

        if (spaces.length) {
          setSpaces((prevSpaces) => [...prevSpaces, ...spaces]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    handleGetSpaces();
  }, [setSpaces]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {spaces.length ? (
        <div className="grid grid-cols-4 gap-4">
          {spaces.map((space) => (
            <SpaceCard space={space} />
          ))}
        </div>
      ) : (
        <div>No spaces found</div>
      )}
    </>
  );
};

export default SpaceList;
