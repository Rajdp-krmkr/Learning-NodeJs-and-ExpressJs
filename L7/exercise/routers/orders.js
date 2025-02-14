const express = require("express");
const router = express.Router();

const middleware = (req, res, next) => {
  console.log(`Request from IP: ${req.ip} to ${req.originalUrl}`);
  next();
};

router.use(middleware);

router
  .route("/:orderid")
  .get((req, res) => {
    const orderid = req.params.orderid;
    if (!orderid) {
      return res.status(400).send("Order ID is required");
    }
    res.status(200).send(`Get order of id: ${orderid}`);
  })
  .post((req, res) => {
    const orderid = req.params.orderid;
    if (!orderid) {
      return res.status(400).send("Order ID is required");
    }

    res.status(200).send(`new order created of id: ${orderid}`);
  })
  .delete((req, res) => {
    const orderid = req.params.orderid;
    if (!orderid) {
      return res.status(400).send("Order ID is required");
    }

    res.status(200).send(`delete order of id: ${orderid}`);
  })
  .put((req, res) => {
    const orderid = req.params.orderid;
    if (!orderid) {
      return res.status(400).send("Order ID is required");
    }

    res.status(200).send(`order updated of id: ${orderid}`);
  });

module.exports = router;
