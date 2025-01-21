import { useState } from "react";
import { useSelector } from "react-redux";
import { AuthenticationStateProps } from "../../../types/authentication/AuthenticationTypes";
import { createReservation } from "../../../services/reservation/ReservationService";
import { calculateDaysBetweenDates } from "../../../utils/date/dateUtils";
import SpaceReservationDates from "./space-reservation-dates/SpaceReservationDates";

type SpaceReservationProps = {
  space: any;
};

const SpaceReservation = ({ space }: SpaceReservationProps) => {
  const loggedUser = useSelector(
    (state: AuthenticationStateProps) => state.auth.userId
  );
  const [reservationDates, setReservationDates] = useState<any>({
    startDate: "",
    endDate: "",
  });

  const handleReservation = async () => {
    try {
      // spaceId
      // renterId
      // startDate
      // endDate
      // totalPrice
      // status
      const days =
        calculateDaysBetweenDates(
          reservationDates.startDate,
          reservationDates.endDate
        ) || 1;

      const newReservation = await createReservation({
        spaceId: space.id,
        renterId: loggedUser,
        startDate: reservationDates.startDate,
        endDate: reservationDates.endDate,
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
      <SpaceReservationDates
        reservationDates={reservationDates}
        setReservationDates={setReservationDates}
      />
      <button
        type="button"
        disabled={!reservationDates.startDate || !reservationDates.endDate}
        onClick={handleReservation}
        className="inline-flex w-content justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm"
      >
        Book now
      </button>
    </div>
  );
};

export default SpaceReservation;
