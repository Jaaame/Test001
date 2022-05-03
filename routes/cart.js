const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewere");
const Product = require("../models/product");
const User = require("../models/user");

router.get("/user/:userId/cart", isLoggedIn, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("cart");
    res.render("cart/showCart", { userCart: user.cart });
  } catch (error) {
    req.flash("error", error.message);
    res.render("error");
  }
});

router.post("/user/:id/cart", isLoggedIn, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    const user = req.user;
    user.cart.push(product);
    await user.save();

    req.flash("success", "เพิ่มเข้าตะกร้าเรียบร้อย");
    res.redirect(`/user/${req.user._id}/cart`);
  } catch (e) {
    req.flash("error", "ไม่สามารถเพิ่มสินค้าได้ ");
    res.render("error");
  }
});

router.delete("/user/:userid/cart/:id", isLoggedIn, async (req, res) => {
  try {
    const { userid, id } = req.params;

    await User.findByIdAndUpdate(userid, { $pull: { cart: id } });
    req.flash("success", "ลบสินค้าออกจากตะกร้าเรียบร้อย");
    res.redirect(`/user/${req.user._id}/cart`);
  } catch (error) {
    req.flash("error", "เกิดข้อผิดพลาดบางอย่าง");
    res.redirect("error", e.message);
  }
});

module.exports = router;
