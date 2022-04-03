import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export const UserQuery = async () => {
  const adminUsersQuery = [];

  const querySnapshotAdminOrders = await getDocs(
    collection(db, "users/all_users/user")
  );
  querySnapshotAdminOrders.forEach((users) => {
    adminUsersQuery.push(users.data());
  });

//   console.log(adminUsersQuery);

  return adminUsersQuery;
};
