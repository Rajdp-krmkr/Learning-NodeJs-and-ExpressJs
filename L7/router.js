const express = require("express");
const router = express.Router();

const usersRouter = require("./routers/users");
const productsRouter = require("./routers/products");

router.use("/users", usersRouter);
router.use("/products", productsRouter);

module.exports = router;
