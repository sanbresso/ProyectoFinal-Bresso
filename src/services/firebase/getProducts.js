import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const getProducts = async (categoryId) => {
  const productosRef = collection(db, "productos");

  // Si hay categoría, filtramos
  const q = categoryId
    ? query(productosRef, where("categoria", "==", categoryId))
    : productosRef;

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
