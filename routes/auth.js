const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user");

router.get("/register", async (req, res) => {
  res.render("auth/signup");
});

router.post("/register", async (req, res) => {
  try {
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      role: req.body.role,
    });
    const newUser = await User.register(user, req.body.password);
    // console.log(newUser);
    req.flash("success", "สร้างบัญชีเรียบร้อยแล้ว");
    res.redirect("/signin");
  } catch (e) {
    req.flash("error", "ไม่สามารถสร้างบัญชีได้ โปรดตรวจสอบลายละเอียด");
    res.redirect("/register");
  }
});

router.get("/signin", (req, res) => {
  res.render("auth/signin");
});

router.post(
  "/signin",
  passport.authenticate("local", {
    failureRedirect: "/signin",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success",`ยินดีต้อนรับ ${req.user.username}, เข้าสู่ระบบเรียบร้อยแล้ว`);
    res.redirect("/");
  }
);

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success", "ออกจากระบบเรียบร้อยแล้ว");
  res.redirect("/signin");
});

module.exports = router;
