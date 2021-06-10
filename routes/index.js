var express = require("express");
var router = express.Router();
var passport = require("passport");

var User = require("../models/user");
var Product = require("../models/product");
var Comment = require("../models/comment");


router.get("/", function(req, res){
    res.redirect("/products")
});

router.get("/register", function(req, res){
    res.render("register");
});
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/products");
            });
        }
    });
});

router.get("/login", function(req, res){
    res.render("login");
});
router.post("/login", passport.authenticate("local",{
        successRedirect: "/products",
        failureRedirect: "/login    "
    }), function(req, res){
    res.send("HI there");
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/products");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect("/login");
    }
}

module.exports = router;