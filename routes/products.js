var express = require("express");
var router = express.Router();

var Product = require("../models/product");
var Comment = require("../models/comment");

router.get("/", function(req, res){
    Product.find({}, function(err, allProducts){
        if(err){
            console.log(err);
        }else{
            res.render("products/index", {products: allProducts, currentUser: req.user});
        }
    })

})



router.post("/" ,isLoggedIn, function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var price = req.body.price;
    var description = req.body.description;
    var newProduct = {name: name, image: image, price: price, description: description};
    
    Product.create(newProduct, function(err, newlyCreated){
        if(err){
            console.log(err)
        }else{
            res.redirect("/products");
        }
    });   
});

router.get("/new",isLoggedIn,  function(req, res){
    res.render("products/new");
});


router.get("/:id", function(req,res){
    Product.findById(req.params.id).populate("comments").exec(function(err, foundproduct){
        if(err){
            console.log(err);
        }else{
            res.render("products/show", {product: foundproduct});
        }
    });
});

router.get("/:id/edit", function(req, res){
    Product.findById(req.params.id, function(err, foundProduct){
        if(err){
            res.redirect("/products");
        }else{
            res.render("products/edit", {product:foundProduct});
        }
    });

});

router.put("/:id", function(req, res){
    Product.findByIdAndUpdate(req.params.id, req.body.product, function(err, updatedProduct){
        if(err){
            res.redirect("/products");
        }else{
            res.redirect("/products/" + req.params.id );
        }
    })
});

router.delete("/:id", function(req, res){
    Product.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/products");
        }else{
            res.redirect("/products");
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