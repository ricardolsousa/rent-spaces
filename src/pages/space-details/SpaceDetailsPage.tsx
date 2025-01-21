import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSpace } from "../../services/space/SpaceService";
import { createReservation } from "../../services/reservation/ReservationService";
import { useSelector } from "react-redux";
import { AuthenticationStateProps } from "../../types/authentication/AuthenticationTypes";
import SpaceDetailsImage from "./space-details-image/SpaceDetailsImage";

const SpaceDetailsPage = () => {
  const { spaceId } = useParams();
  const loggedUser = useSelector(
    (state: AuthenticationStateProps) => state.auth.userId
  );
  const [space, setSpace] = useState<any>(null);
  const [reservation, setReservation] = useState<any>(null);

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

  const calculateDifference = (start: any, end: any) => {
    if (start && end) {
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);

      const diffInTime = endDateObj.getTime() - startDateObj.getTime();
      const diffInDays = diffInTime / (1000 * 3600 * 24); // Converter milissegundos para dias

      return diffInDays > 0 ? diffInDays : 0; // Garante que não seja negativo
    } else {
      return null; // Reseta se as datas forem inválidas
    }
  };

  const handleReservation = async () => {
    try {
      // spaceId
      // renterId
      // startDate
      // endDate
      // totalPrice
      // status
      const days =
        calculateDifference(reservation.startDate, reservation.endDate) || 1;

      const newReservation = await createReservation({
        spaceId: spaceId,
        renterId: loggedUser,
        startDate: reservation.startDate,
        endDate: reservation.endDate,
        totalPrice: days * space.pricePerHour,
        status: "confirmed",
      });
    } catch (e) {
      console.error(e);
    }
    console.log("book now");
  };

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
          <div className="flex flex-row gap-4 items-end">
            <div className="flex flex-col">
              <label htmlFor="startDate">Start date</label>
              <input
                className="rounded border border-gray-300 px-2 py-1"
                type="date"
                name="startDate"
                id="startDate"
                value={reservation?.startDate}
                onChange={(e) =>
                  setReservation({ ...reservation, startDate: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="endDate">End date</label>
              <input
                className="rounded border border-gray-300 px-2 py-1"
                type="date"
                name="endDate"
                id="endDate"
                value={reservation?.endDate}
                onChange={(e) =>
                  setReservation({ ...reservation, endDate: e.target.value })
                }
              />
            </div>
            <button
              type="button"
              onClick={handleReservation}
              className="inline-flex w-content justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm"
            >
              Book now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpaceDetailsPage;
