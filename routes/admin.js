const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewere");
const Order = require("../models/order");

router.get("/admin/:id/allorders", isLoggedIn, async (req, res) => {
  try {
    const allOrders = await Order.find({}).sort({ date: -1 });
    res.render("admin/allOrders", { allOrders });
  } catch (error) {
    req.flash("error", "Cannot Find Orders");
    res.render("error");
  }
});

router.get("/admin/:id/order/:orderId", isLoggedIn, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    res.render("admin/updateOrder", { order });
  } catch (error) {
    req.flash("error", "Unable to find the Order");
    res.render("error");
  }
});

router.patch("/admin/:id/order/:orderId", isLoggedIn, async (req, res) => {
  try {
    await Order.updateOne(
      { _id: req.params.orderId },
      { $set: { status: req.body.status } },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    req.flash("success", "Order Updated Successfully");
    res.redirect(`/admin/${req.params.id}/allorders`);
  } catch (error) {
    req.flash("error", "Cannot Update Order");
    res.render("error");
  }
});

module.exports = router;
