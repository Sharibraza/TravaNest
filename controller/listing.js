const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;

const geoCodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    let listing;
    if (req.query.category) {
        listing = await Listing.find({category:req.query.category});
    }else{
        listing = await Listing.find({});
    }
    res.render("listings/index.ejs", { listing });
};


module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");   // written before id route because browser search new as id.    
};

module.exports.showListings = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            }
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", " Listing you requested for, Does not Exists!");
        res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {

    let response = await geoCodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
        .send();
    let url = req.file.path;
    let filename = req.file.filename;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.category = req.body.listing.category;
    newListing.image = { url, filename };
    newListing.geometry = response.body.features[0].geometry;
    let savedListings = await newListing.save();
    req.flash("success", "New Listing Created");
    console.log(savedListings);
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", " Listing you requested for, Does not Exists!");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl.replace("/upload", "/upload/w_200")
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updatelistings = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", " Listing Updated");
    res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", " Listing Deleted");
    res.redirect("/listings");
};
