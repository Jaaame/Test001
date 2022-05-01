const express = require("express");
const { isLoggedIn } = require("../middlewere");
const Product = require("../models/product");
const User = require("../models/user");
const router = express.Router();

router.get("/user/:userId/profile", isLoggedIn, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("cart orders");
    res.render("user/profile", { userProfile: user });
  } catch (error) {
    req.flash("error", error.message);
    res.render("error");
  }
});

router.get("/user/:userId/orders", isLoggedIn, async (req, res) => {
  try {
    const userInfo = await User.findById(req.params.userId).populate({
      path: "orders",
      options: { sort: { date: -1 } },
      populate: {
        path: "orderedProducts",
        model: "Product",
      },
    });
    // console.log(userInfo);
    res.render("user/orders", { orders: userInfo.orders });
  } catch (error) {
    // console.log(error);
    req.flash("error", error.message);
    res.render("error");
  }
});

module.exports = router;
