import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSpace } from "../../services/space/SpaceService";

const SpaceDetailsPage = () => {
  const { spaceId } = useParams();
  const [space, setSpace] = useState<any>(null);

  useEffect(() => {
    const fetchSpace = async () => {
      try {
        if (spaceId) {
          const newSpace = await getSpace(spaceId);

          if (newSpace) {
            setSpace(newSpace);
          }
        }
      } catch (e) {
        console.error(e);
        throw new Error("Error trying to get space");
      }
    };

    fetchSpace();
  }, [spaceId]);

  return (
    <div className="py-4 px-48">
      Space Details Page {spaceId}
      <div>{JSON.stringify(space, null, 2)}</div>
    </div>
  );
};

export default SpaceDetailsPage;
