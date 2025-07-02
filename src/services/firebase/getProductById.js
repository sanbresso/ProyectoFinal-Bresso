import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const getProductById = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
};
