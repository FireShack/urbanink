import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import { TotalComp } from "./TotalComp";
import { CheckoutStepsComp } from "./CheckoutStepsComp";
import { useNavigate } from "react-router-dom";
import {
  AddUserOrder,
  cleanCart,
  fillOrderId,
  payedState,
  saveData,
  fillOrderDate,
  cleanUserData,
} from "../../actions/cart";
import uniqid from "uniqid";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";

export const CheckoutForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { total, cart, userData } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const [valuesNumber, setValuesNumber] = useState(false);
  const [valuesExpiry, setValuesExpiry] = useState(false);
  const [valuesCvc, setValuesCvc] = useState(false);
  const [message, setMessage] = useState({
    exists: false,
    text: "",
    error: null,
    success: null,
  });

  const dateNow = new Date();
  const day = dateNow.getDate();
  const month = dateNow.getMonth() + 1;
  const year = dateNow.getFullYear();

  const orderId = uniqid("order-");
  const orderToMail = cart.map((products) => {
    return (
      <>
        <img src={`${products.img}`} style={{ height: "8rem" }} />
        <p className="text-center">{products.title}</p>
        <p className="text-center">{products.amount}</p>
        <p className="text-center">${products.price}</p>
      </>
    );
  });
  init("0BwEQS_LfPO0ozSES");
  const templateParams = {
    user_email: `${userData.mail}`,
    to_name: `${userData.name}`,
    my_html: { orderToMail },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(orderId);
    const totalStripe = Number(total) * 100;
    setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      const { data } = await axios.post("http://localhost:3001/api/checkout", {
        id,
        amount: totalStripe.toFixed(0),
        description: orderId,
      });
      // console.log(data);
      setMessage({
        exists: true,
        text: data.message,
        error: data.error,
        success: data.success,
      });
      setLoading(false);
      if (data.error) {
        dispatch(payedState(false));
        return;
      } else {
        dispatch(payedState(true));
        dispatch(AddUserOrder(cart));
        dispatch(fillOrderId(orderId));
        dispatch(fillOrderDate(day, month, year));
        setTimeout(() => {
          navigate("/checkout/user/payed/your-order", { replace: true });
          // emailjs.send("service_pl1jnuw", "template_zmer0lg", templateParams);
          dispatch(cleanCart());
        }, 1000);
        dispatch(saveData(userData));
        // dispatch(fillOrderDate(date));
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <CheckoutStepsComp />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 mt-4">
          <div className="row">
            <div className="col-12">
              <p className="p-1 fs-4 text-center">Pay with card</p>
            </div>

            <form className="" onSubmit={handleSubmit}>
              <div>
                <label>Card number</label>
              </div>
              <div className="col-12 form-control p-2">
                <CardNumberElement
                  onChange={(e) => {
                    setValuesNumber(e.complete);
                  }}
                />
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <div>
                    <label>Expiry date</label>
                  </div>
                  <CardExpiryElement
                    className="border p-2"
                    onChange={(e) => {
                      setValuesExpiry(e.complete);
                    }}
                  />
                </div>
                <div className="col-6">
                  <div>
                    <label>CVC</label>
                  </div>
                  <CardCvcElement
                    className="border p-2"
                    onChange={(e) => {
                      setValuesCvc(e.complete);
                    }}
                  />
                </div>
              </div>
              <div className="col-12 mt-4">
                <button
                  type="submit"
                  className="btn btn-outline-dark rounded-0 shadow-0 w-100"
                  disabled={
                    loading || !valuesNumber || !valuesExpiry || !valuesCvc
                      ? true
                      : false
                  }
                >
                  Pay ${total}
                </button>
              </div>
              {message.exists ? (
                <Alert
                  className="mt-3 text-center"
                  variant={message.error === 404 ? "danger" : "success"}
                >
                  {message.text}
                </Alert>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <TotalComp />
        </div>
      </div>
    </div>
  );
};
