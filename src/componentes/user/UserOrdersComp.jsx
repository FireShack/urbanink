import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadUserData, startLoadUserOrderId } from "../../actions/auth";
import { UserNavSideComp } from "./UserNavSideComp";

export const UserOrdersComp = () => {
  const dispatch = useDispatch();
  const { userAuthData, orderAuthId } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(startLoadUserData(userAuthData.uid));
    dispatch(startLoadUserOrderId(userAuthData.uid));
  }, [dispatch, userAuthData.id, userAuthData.uid]);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <UserNavSideComp />
        <div className="col-9 mt-4">
          <h5 className="text-center">My orders</h5>
          {orderAuthId !== null ? (
            orderAuthId.map((global) => {
              return (
                <>
                  <div
                    className="row table-responsive overflow-scroll mt-3"
                    key={global.orderId}
                  >
                    <div className="d-flex justify-content-between">
                      <p className="">
                        Order: <span className="fw-bold">{global.orderId}</span>
                      </p>
                      <p>
                        Date: <span className="fw-bold">{global.date}</span>
                      </p>
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="col text-center">Product image</th>
                          <th className="col text-center">Product Name</th>
                          <th className="col text-center">Amount</th>
                          <th className="col text-center">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {global.order.map((products) => {
                          return (
                            <tr>
                              <td className="d-flex justify-content-center">
                                {products.img ? (
                                  <img
                                    src={`${products.img}`}
                                    alt="order"
                                    style={{ height: "5rem" }}
                                  />
                                ) : (
                                  ""
                                )}
                              </td>
                              <td className="text-center">{products.title}</td>
                              <td className="text-center">{products.amount}</td>
                              <td className="text-center">{products.price}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              );
            })
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

// ) : (
//   <div className="row mt-5">
//     <p className="text-center text-muted">Your cart is empty</p>
//   </div>
// )}
