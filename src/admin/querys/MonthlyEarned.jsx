import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export const MonthlyEarned = async () => {
  const adminMonthEarnedAllQuery = [];

  const querySnapshotAdminMonthlyEarned = await getDocs(
    collection(db, "orders/earned/total")
  );
  querySnapshotAdminMonthlyEarned.forEach((month) => {
    adminMonthEarnedAllQuery.push(month.data());
  });

//   console.log(adminMonthEarnedAllQuery);

  return adminMonthEarnedAllQuery;
};
