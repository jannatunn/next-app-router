import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app)

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log("ini adalah snapshot =>>", snapshot.docs);
  console.log("ini adalah data =>>", data);
  

  return data;
}

export async function retrieveDataId(collectionName: string, id: string) {
  const snapshot = await getDocs(doc(firestore, collectionName, id));
  const data = snapshot.data();

  return data;
}