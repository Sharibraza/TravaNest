const Listing = require("./models/listing");
const Review= require("./models/reviews");
const { listingSchema } = require("./joiSchema.js");
const ExpressError = require("./utilities/expressError.js");
const { reviewSchema}= require("./joiSchema.js");

module.exports.isLoggedIn= (req,res,next) => {
  // console.log(req.user);
    if(!req.isAuthenticated()){
      req.session.redirectUrl= req.originalUrl;   //refer note for further details
        req.flash("error", "Please Loggin to create a new listing");
        return  res.redirect("/login");
      }
       next();
}

module.exports.saveRedirectUrl= (req,res,next) =>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl= req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner= async (req,res,next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of this Listing");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.isReviewAuthor= async (req,res,next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the author of this review");
    return res.redirect(`/listings/${id}`);
  }
  next();
};


// validating middleware functions

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  // let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map(el =>el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};