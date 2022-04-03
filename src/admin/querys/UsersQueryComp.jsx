import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export const UsersQueryComp = async (uid) => {
  const usersQueryComp = [];

  const response = await getDocs(collection(db, `users/purchases/${uid}`));

  response.forEach((data) => {
    usersQueryComp.push(data.data());
  });

  return usersQueryComp;
};
