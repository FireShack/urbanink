import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export const MonthEarnedQueryComp = async (filterParam) => {
  const adminMonthEarnedQuery = [];

  const q = query(
    collection(db, "orders/earned/total"),
    where("month", "==", filterParam)
  );

  const querySnapshotAdminMonthEarned = await getDocs(q);
  querySnapshotAdminMonthEarned.forEach((earned) => {
    adminMonthEarnedQuery.push(earned.data().earned);
  });
  return adminMonthEarnedQuery;
};
