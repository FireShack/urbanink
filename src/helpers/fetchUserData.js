import { collection, getDocs, where } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const fetchUserData = async (uid) => {
  const fireUserDataOrders = [];
  // const fireUserData = [];
  const querySnapshotOrders = await getDocs(
    collection(db, `users/${uid}/purchases`)
  );
  // const querySnapshotData = await getDocs(collection(db, `${uid}/user/data`));
  querySnapshotOrders.forEach((purchases) => {
    fireUserDataOrders.push(purchases.data().order);
  });

  // querySnapshotData.forEach((data) => {
  //   fireUserData.push(data.data().order);
  // });

  return fireUserDataOrders;
};
