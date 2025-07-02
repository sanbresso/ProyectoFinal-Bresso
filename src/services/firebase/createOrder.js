import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

export const createOrder = async (orderData) => {
  const ordersRef = collection(db, "ordenes");
  const newOrder = {
    ...orderData,
    date: Timestamp.fromDate(new Date()),
  };
  const docRef = await addDoc(ordersRef, newOrder);
  return docRef.id;
};
