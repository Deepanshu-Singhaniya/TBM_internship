var express = require("express");
var router = express.Router({mergeParams:true});

var Product = require("../models/product");
var Comment = require("../models/comment");

router.get("/new",isLoggedIn,  function(req, res){
    Product.findById(req.params.id, function(err, product){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new", {product: product});
        }
    });
});

router.post("/",isLoggedIn, function(req, res){
    // var author = req.body.author;
    // var text = req.body.text;
    // var comment = { author: author, text: text};
    Product.findById(req.params.id, function(err, product){
        if(err){
            res.redirect("/products");
        }else{
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }else{
                    product.comments.push(comment);
                    product.save();
                   
                    res.redirect("/products/"+ product._id);
                }
            })
        }
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect("/login");
    }
}

module.exports = router;