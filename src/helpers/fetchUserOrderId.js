import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const fetchUserOrderId = async (uid) => {
  const fireUserDataOrdersId = [];

  const querySnapshotOrders = await getDocs(
    collection(db, `users/${uid}/purchases`)
  );
  querySnapshotOrders.forEach((orderid) => {
    fireUserDataOrdersId.push(orderid.data());
  });

  return fireUserDataOrdersId;
};
