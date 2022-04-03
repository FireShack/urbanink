import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export const FilterQueryComp = async (filterParam, limitParam) => {
  const adminFilterQuerys = [];

  const filterQuery = query(
    collection(db, "orders"),
    where("date", "==", filterParam),
    limit(limitParam)
  );
  const filterResponse = await getDocs(filterQuery);

  filterResponse.forEach((filterData) => {
    adminFilterQuerys.push(filterData.data());
  });
  
//   console.log(adminFilterQuerys);
  return adminFilterQuerys;
};
