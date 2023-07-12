import { app } from "./config";
import {
  QuerySnapshot,
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
  where,
} from "firebase/firestore";
import type { CollectionReference, DocumentData, DocumentSnapshot } from "firebase/firestore";


export const db = getFirestore(app);


function parseResults<T extends Entity>(querySnapshot: QuerySnapshot<T>) {
  const foundItems: T[] = [];
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${Object.keys(doc.data())}`);

    const timeStamp = doc.data().date.seconds * 1000;
    const newItem = { id: doc.id, ...doc.data(), date: new Date(timeStamp) };
    foundItems.push(newItem);
  });

  return foundItems;
}

export async function getItems() {

  const itemsRef = collection(db, "items") as CollectionReference<Item>;
  const querySnapshot = await getDocs<Item>(query(itemsRef, orderBy('date')));

  const foundItems = parseResults(querySnapshot);

  return foundItems;
}

const quantityOfItems = 2;
export async function getNextItems(lastVisible?: DocumentSnapshot<unknown>) {
  const itemsRef = collection(db, "items") as CollectionReference<Item>;
  const q = query(
    itemsRef, ...([
      orderBy("date"),
      limit(quantityOfItems),
      lastVisible ? startAfter(lastVisible) : [],
    ].flatMap(a => a))
  );

  const querySnapshot = await getDocs(q);

  const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const newFirstVisible = querySnapshot.docs[0];

  const foundItems = parseResults(querySnapshot);

  return { foundItems, newFirstVisible, newLastVisible };
}

export async function getPreviousItems(firstVisible: unknown) {
  const itemsRef = collection(db, "items") as CollectionReference<Item>;
  const q = query(
    itemsRef,
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

export async function getItemById(id: unknown) {
  const itemsRef = collection(db, "items") as CollectionReference<Item>;
  const q = query(itemsRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  const foundItems = parseResults(querySnapshot);
  return foundItems[0];
}

export async function getRecentItems() {
  //TODO limit by date
  const itemsRef = collection(db, "items") as CollectionReference<Item>;
  const querySnapshot = await getDocs(itemsRef);

  const foundItems = parseResults(querySnapshot);

  return foundItems;
}

export async function getNotifications() {
  const notificationsRef = collection(db, "items") as CollectionReference<Notification>;
  const querySnapshot = await getDocs(notificationsRef);

  const foundItems = parseResults(querySnapshot);

  return foundItems;
}

export async function saveScanned(data: DocumentData) {
  await addDoc(collection(db, "scanned"), {
    data,
  });
}
