type SpaceReservationDatesProps = {
  reservationDates: {
    startDate: string;
    endDate: string;
  };
  setReservationDates: (reservationDates: any) => void;
};

const SpaceReservationDates = ({
  reservationDates,
  setReservationDates,
}: SpaceReservationDatesProps) => {
  // Função para lidar com mudanças no input de data inicial
  const handleStartDateChange = (e: any) => {
    const selectedDate = e.target.value;
    setReservationDates((prevDates: any) => ({
      ...prevDates,
      startDate: selectedDate,
    }));

    // Reseta a data final se ela for inválida
    if (
      reservationDates.endDate &&
      new Date(reservationDates.endDate) <= new Date(selectedDate)
    ) {
      setReservationDates((prevDates: any) => ({ ...prevDates, endDate: "" }));
    }
  };

  // Função para lidar com mudanças no input de data final
  const handleEndDateChange = (e: any) => {
    setReservationDates((prevDates: any) => ({
      ...prevDates,
      endDate: e.target.value,
    }));
  };

  // Calcula a data mínima para o segundo input
  const minEndDate = reservationDates.startDate
    ? new Date(
        new Date(reservationDates.startDate).setDate(
          new Date(reservationDates.startDate).getDate() + 1
        )
      )
        .toISOString()
        .split("T")[0]
    : "";

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="startDate">Start date</label>
        <input
          className="rounded border border-gray-300 px-2 py-1"
          type="date"
          name="startDate"
          id="startDate"
          value={reservationDates.startDate}
          onChange={(e) => handleStartDateChange(e)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="endDate">End date</label>
        <input
          className="rounded border border-gray-300 px-2 py-1"
          type="date"
          name="endDate"
          id="endDate"
          value={reservationDates.endDate}
          min={minEndDate}
          onChange={(e) => handleEndDateChange(e)}
        />
      </div>
    </>
  );
};

export default SpaceReservationDates;
