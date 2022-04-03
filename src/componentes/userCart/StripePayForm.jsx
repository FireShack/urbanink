import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";
export const StripePayForm = () => {
  const stripePromise = loadStripe(
    "pk_test_51KdMMqI8Dr1aMJxHMPFleBNVUzNovityCaudRBxOT42ZvaUN7U9LWyhor9jMkPV2XT0jQ8sWGyAVPfRAydQySDZh00ruttfnC0"
  );

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
