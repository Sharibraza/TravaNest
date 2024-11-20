const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utilities/wrapAsync.js");
const ExpressError = require("../utilities/expressError.js");
const { reviewSchema } = require("../joiSchema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");
const { Schema } = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js")

const reviewController = require("../controller/review.js");


// post Reviews 
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));

//Delete reviews
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(async (req, res) => {
        let { id, reviewId } = req.params;
        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
        await Review.findByIdAndDelete(reviewId);
        req.flash("success", " Review Deleted");
        res.redirect(`/listings/${id}`);
    }));


module.exports = router;
