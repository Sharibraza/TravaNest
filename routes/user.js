const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utilities/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js")
const userController = require("../controller/user.js");

router
  .route("/signup")
  .get( userController.renderSignupForm)     // Signup page
  .post( wrapAsync(userController.signup));


  router
    .route("/login")
    .get( userController.renderLoginForm)  // Login page
    .post(
      saveRedirectUrl,
      passport.authenticate("local", {      // passport.authenticate() is used to authenticate the user
        failureRedirect: '/login',          
        failureFlash: true
      }),
      userController.login
    );


router.get("/logout", userController.logout);

module.exports = router;