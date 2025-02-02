import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSpace } from "../../services/space/SpaceService";
import SpaceDetailsImage from "./space-details-image/SpaceDetailsImage";
import SpaceReservation from "./space-reservation/SpaceReservation";
import { getReservationsBySpaceId } from "../../services/reservation/ReservationService";

const SpaceDetailsPage = () => {
  const { spaceId } = useParams();
  const [space, setSpace] = useState<any>(null);
  const [reservations, setReservations] = useState<any>(null);

  useEffect(() => {
    const fetchSpace = async () => {
      try {
        if (spaceId) {
          const newSpace = await getSpace(spaceId);

          if (newSpace) {
            setSpace(newSpace);
            const allReservations = await getReservationsBySpaceId(spaceId);
            setReservations(allReservations);
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
      {space && (
        <div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-950 mb-1">
              {space.title}
            </h2>
            <div className="flex items-center gap-2">{space.address}</div>
          </div>
          <SpaceDetailsImage />
          {JSON.stringify(reservations, null, 2)}
          <SpaceReservation space={space} />
        </div>
      )}
    </div>
  );
};

export default SpaceDetailsPage;
