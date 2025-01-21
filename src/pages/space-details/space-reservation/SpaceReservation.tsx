import { useState } from "react";
import { useSelector } from "react-redux";
import { AuthenticationStateProps } from "../../../types/authentication/AuthenticationTypes";
import { createReservation } from "../../../services/reservation/ReservationService";
import { calculateDaysBetweenDates } from "../../../utils/date/dateUtils";

type SpaceReservationProps = {
  space: any;
};

const SpaceReservation = ({ space }: SpaceReservationProps) => {
  const loggedUser = useSelector(
    (state: AuthenticationStateProps) => state.auth.userId
  );
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  const handleReservation = async () => {
    try {
      // spaceId
      // renterId
      // startDate
      // endDate
      // totalPrice
      // status
      const days = calculateDaysBetweenDates(startDate, endDate) || 1;

      const newReservation = await createReservation({
        spaceId: space.id,
        renterId: loggedUser,
        startDate: startDate,
        endDate: endDate,
        totalPrice: days * space.pricePerHour,
        status: "confirmed",
      });
    } catch (e) {
      console.error(e);
    }
    console.log("book now");
  };

  return (
    <div className="flex flex-row gap-4 items-end">
      <div className="flex flex-col">
        <label htmlFor="startDate">Start date</label>
        <input
          className="rounded border border-gray-300 px-2 py-1"
          type="date"
          name="startDate"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="endDate">End date</label>
        <input
          className="rounded border border-gray-300 px-2 py-1"
          type="date"
          name="endDate"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
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
  );
};

export default SpaceReservation;
