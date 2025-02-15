const mongoose = require("mongoose");
mongoose
  .connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then()
  .catch();
const express = require("express");
const app = express();
const router = express.Router();

const orderSchema = new mongoose.Schema({
  orderId: String,
  customerName: String,
  customerName: String,
  quantity: Number,
  price: Number,
  dateOfOrder: new Date(),
});

const Order = mongoose.model("Order", orderSchema);

router.post("/", async (req, res) => {
  const order = new Order({
    orderId: req.body.orderId,
    customerName: req.body.customerName,
    item: req.body.item,
    quantity: req.body.quantity,
    price: req.body.price,
  });
  try {
    const savedOrder = await order.save();
    res.status(201).send(savedOrder);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.use("/order", router);

app.listen(3000, () => {
  console.log("the server is running on http://localhost:3000");
});
