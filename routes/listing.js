const express = require("express");
const router = express.Router();
const wrapAsync = require("../utilities/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controller/listing.js");

const multer = require('multer');            //img uploads
const { storage } = require("../cloudConfig.js")
const upload = multer({ storage });

router
  .route("/",)
  .get(wrapAsync(listingController.index))     // index route
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)    // Create route
  );

//  new Listing route
router.get(
  "/new",
  isLoggedIn, listingController.renderNewForm
);


router
  .route("/:id")
  .get(wrapAsync(listingController.showListings))  // Showing  Listing route
  .put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),               //Updating listing route
    validateListing,
    wrapAsync(listingController.updatelistings))
  .delete(
    isLoggedIn,                                       //Deleting listing route
    isOwner,
    wrapAsync(listingController.destroyListing));


// Editing Listing route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);


module.exports = router;