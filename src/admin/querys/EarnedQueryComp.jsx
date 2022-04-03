import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export const EarnedQueryComp = async () => {
  const adminEarnedQuery = [];

  const querySnapshotAdminEarned = await getDocs(
    collection(db, "orders/earned/total")
  );
  querySnapshotAdminEarned.forEach((earned) => {
    adminEarnedQuery.push(earned.data().earned);
  });

  return adminEarnedQuery;
};
