import {
  doc,
  setDoc,
  getDocs,
  query,
  collection,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

//Save data to firestore
export const saveItem = async (data) => {
  await setDoc(doc(db, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

//Getall food data
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(db, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
