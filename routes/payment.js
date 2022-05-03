const express = require("express");
const { isLoggedIn } = require("../middlewere");
const router = express.Router();
const Order = require("../models/order");
const User = require("../models/user");
const Product = require("../models/product");
const multer = require("multer");

const upload = require("../multer");

router.get("/payday", (req, res) => {
  res.render("cart/Payday");
});

router.post("/payday", (req, res) => {
  res.redirect("/payday");
});

router.get("/success", (req, res) => {
  res.render("payment/success");
});

router.post("/pay",upload.single("file"),isLoggedIn, async (req, res) => {
  var body = req.body;
  const order = new Order({
    imagePay: req.body.slip_image,
    amount: req.body.Amount,
    orderedProducts: req.user.cart,
    itemallder: req.body.orderItem,
    Address: req.body.address,
  });
    await order.save();
    const { cart } = req.params;

    await User.findByIdAndUpdate(cart, { $pull: { user : cart } });
    res.redirect("/success");
});

module.exports = router;
