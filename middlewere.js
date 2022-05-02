const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "กรุณาเข้าสู่ระบบ");
    return res.redirect("/signin");
  }
  next();
};

module.exports = { isLoggedIn };
