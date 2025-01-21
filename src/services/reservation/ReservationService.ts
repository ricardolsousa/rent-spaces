import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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

export const getReservationsBySpaceId = async (spaceId: string) => {
  try {
    const reservationsRef = collection(db, "reservations");

    const reservationQuery = query(
      reservationsRef,
      where("spaceId", "==", spaceId),
      where("status", "==", "confirmed")
    );

    const reservationsSnapshot = await getDocs(reservationQuery);

    const reservations = reservationsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return reservations;
  } catch (e) {
    console.error(e);
    throw new Error("Error trying to get reservations for the space");
  }
};
