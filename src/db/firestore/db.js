import { app } from "./config";
import { getDoc, getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

export const db = getFirestore(app);

console.log("executing");

function parseResults(querySnapshot) {
  const foundItems = [];
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${Object.keys(doc.data())}`);

    const timeStamp = doc.data().date * 1000;
    const newItem = { id: doc.id, ...doc.data(), date: new Date(timeStamp) };
    foundItems.push(newItem);
  });

  return foundItems;
}

export async function getItems(pagination) {
  const querySnapshot = await getDocs(collection(db, "items"));

  const foundItems = parseResults(querySnapshot);

  return foundItems;
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
