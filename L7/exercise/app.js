const express = require("express");
const ordersRouter = require("./routers/orders");

const app = express();

app.use("/orders", ordersRouter);

const PORT = 3000;

app.listen(3000, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
