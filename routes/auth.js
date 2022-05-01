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
    req.flash("success", "User Registred Successfully. Please Log In");
    res.redirect("/signin");
  } catch (e) {
    req.flash("error", "Unable to Register User , Enter valid details");
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
    req.flash(
      "success",
      `Welcome back ${req.user.username}, You Logged In Successfully`
    );
    res.redirect("/");
  }
);

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success", "Logged Out Successfully");
  res.redirect("/signin");
});

module.exports = router;
