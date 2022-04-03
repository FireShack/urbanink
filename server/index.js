const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();

const stripe = new Stripe(
  "sk_test_51KdMMqI8Dr1aMJxHvE4ccWmKIm5FNvJvZhxIITKjinSrnvwxMSVF1XLygDhdIyqK53TIKDzG88Hje9B2qkdHc9yd00PJNC6K8v"
);

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  try {
    const { id, amount, description } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description,
      payment_method: id,
      confirm: true,
    });
    res.send({ success: 200, message: "Successfull payment" });
  } catch (error) {
    const { message } = error.raw;
    res.send({ error: 404, message: message });
  }
});
app.listen(3001, () => {
  console.log("server on port", 3001);
});
