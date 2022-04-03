import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export const OrderQueryComp = async () => {
  const adminOrdersQuery = [];

  const querySnapshotAdminOrders = await getDocs(collection(db, "orders"));
  querySnapshotAdminOrders.forEach((orders) => {
    adminOrdersQuery.push(orders.data());
  });

  return adminOrdersQuery;
};
