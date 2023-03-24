import { app } from "./config";
import {
  addDoc,
  collection,
  endBefore,
  getDocs,
  getFirestore,
  limit,
  limitToLast,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";

export const db = getFirestore(app);

console.log("executing");

function parseResults(querySnapshot) {
  const foundItems = [];
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${Object.keys(doc.data())}`);

    const timeStamp = doc.data().date.seconds * 1000;
    const newItem = { id: doc.id, ...doc.data(), date: new Date(timeStamp) };
    foundItems.push(newItem);
  });

  return foundItems;
}

export async function getItems() {
  const querySnapshot = await getDocs(collection(db, "items"), orderBy("date"));

  const foundItems = parseResults(querySnapshot);

  return foundItems;
}
const quantityOfItems = 2;
export async function getNextItems(lastVisible) {
  let querySnapshot;
  if (!lastVisible) {
    const q = query(
      collection(db, "items"),
      orderBy("date"),
      limit(quantityOfItems)
    );
    querySnapshot = await getDocs(q);
  } else {
    const q = query(
      collection(db, "items"),
      orderBy("date"),
      limit(quantityOfItems),
      startAfter(lastVisible)
    );
    querySnapshot = await getDocs(q);
  }

  const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const newFirstVisible = querySnapshot.docs[0];

  const foundItems = parseResults(querySnapshot);

  return { foundItems, newFirstVisible, newLastVisible };
}

export async function getPreviousItems(firstVisible) {
  const q = query(
    collection(db, "items"),
    orderBy("date"),
    limitToLast(quantityOfItems),
    endBefore(firstVisible)
  );
  const querySnapshot = await getDocs(q);

  const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const newFirstVisible = querySnapshot.docs[0];

  const foundItems = parseResults(querySnapshot);

  return { foundItems, newFirstVisible, newLastVisible };
}

export async function getItemById(id) {
  const querySnapshot = await getDocs(collection(db, "items"), id);
  const foundItems = parseResults(querySnapshot);

  return foundItems[0];
}

export async function getRecentItems() {
  const querySnapshot = await getDocs(collection(db, "items"));

  const foundItems = parseResults(querySnapshot);

  return foundItems;
}

export async function getNotifications() {
  const querySnapshot = await getDocs(collection(db, "notifications"));

  const foundItems = parseResults(querySnapshot);

  return foundItems;
}

export async function saveScanned(data) {
  await addDoc(collection(db, "scanned"), {
    data,
  });
}
