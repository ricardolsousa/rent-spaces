import { addDoc, collection, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const createReservation = async (reservation: any) => {
  try {
    const reservationRef = collection(db, "reservations");

    const reservationSnapshot = await addDoc(reservationRef, {
      createdAt: new Date(),
      updatedAt: new Date(),
      ...reservation,
    });

    const newReservation = await getDoc(reservationSnapshot);

    if (newReservation.exists()) {
      return {
        id: newReservation.id,
        ...newReservation.data(),
      };
    } else {
      throw new Error("Created space not found");
    }
  } catch (e) {
    console.error(e);
    throw new Error("Error trying to create reservation");
  }
};
