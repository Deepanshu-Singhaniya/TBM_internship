var express =require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");

var Product = require("./models/product");
var Comment = require("./models/comment");
var User = require("./models/user");
var seedDB = require("./seed");

var productroutes = require("./routes/products");
var commentroutes = require("./routes/comments");
var indexroutes = require("./routes/index");

mongoose.connect('mongodb+srv://Admin-Deepanshu:adcluster@cluster0.fcoxy.mongodb.net/product_portfolio', {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect('mongodb://localhost:27017/product_portfolio', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("Public"));
app.use(methodOverride("_method"));

app.use(require("express-session")({
    secret: "I love bootstrap paradox",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

seedDB();
// console.log(__dirname);
// var mobileSchema = new mongoose.Schema({
//     name: String,
//     image: String, 
//     ram : String, 
//     display: String,
//     camera: String, 
//     battery: String, 
//     processor: String

// });

// var Mobile = mongoose.model("Mobile", mobileSchema);

// Mobile.create(
//     {
//         name: "Infinix Hot 9 (Violet, 64 GB)  (4 GB RAM)", 
//         image: "https://rukminim1.flixcart.com/image/416/416/k8g8knk0/mobile/m/b/z/infinix-hot-9-x655d-original-imafqgr9j7gh32zq.jpeg?q=70",
//         ram: "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB",
//         display: "16.76 cm (6.6 inch) HD+ Display",
//         camera:"13 MP + 2 MP + 2 MP + Low Light Sensor | 8MP Front Camera",
//         battery: "5000 mAh Li-ion Polymer Battery",
//         processor:"MediaTek Helio P22 (64 bit) Processor"

//     }, function(err, mobile){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Newly created mobile phone");
//             console.log(mobile);
//         }

// });

var mobiles = [
    {
        name: "Mi 10 (Twilight Grey, 256 GB)  (8 GB RAM)",
        image: "https://rukminim1.flixcart.com/image/416/416/kdxfc7k0/mobile/6/f/h/mi-10-mzb9044in-original-imafuq92ausjrxaz.jpeg?q=70",
        ram: "8 GB RAM | 256 GB ROM",
        display: "16.94 cm (6.67 inch) Display ",
        camera:"108MP + 13MP + 2MP + 2MP | 20MP Front Camera",
        battery: "4780 mAh Battery",
        processor:"Qualcomm Snapdragon 865 Processor Full HD+ 3D Curved E3 AMOLED HDR 10+ Display 30 W Charging"                           
    },
    {
        name: "Infinix Hot 9 (Violet, 64 GB)  (4 GB RAM)", 
        image: "https://rukminim1.flixcart.com/image/416/416/k8g8knk0/mobile/m/b/z/infinix-hot-9-x655d-original-imafqgr9j7gh32zq.jpeg?q=70",
        ram: "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB",
        display: "16.76 cm (6.6 inch) HD+ Display",
        camera:"13 MP + 2 MP + 2 MP + Low Light Sensor | 8MP Front Camera",
        battery: "5000 mAh Li-ion Polymer Battery",
        processor:"MediaTek Helio P22 (64 bit) Processor"
    },
    {
        name: "OPPO F17 Pro (Magic Blue, 128 GB)  (8 GB RAM)", 
        image: "https://rukminim1.flixcart.com/image/416/416/kekadu80/mobile/x/n/y/oppo-f17-pro-cph2119-original-imafv7pxhjkcrv3q.jpeg?q=70",
        ram: "8 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
        display: "16.33 cm (6.43 inch) Full HD+ Display",
        camera:"48MP + 8MP + 2MP + 2MP | 16MP + 2MP Dual Front Camera",
        battery: "4015 mAh Lithium-ion Battery",
        processor:"MediaTek Helio P95 Processor"
    },
    {
        name: "itel Vision1 (Gradation Green, 32 GB)  (3 GB RAM) ", 
        image: "https://rukminim1.flixcart.com/image/416/416/kdqa4y80/mobile/r/h/s/itel-vision1-l6005-original-imafuk67eq2ptp6z.jpeg?q=70",
        ram: "3 GB RAM | 32 GB ROM | Expandable Upto 128 GB",
        display: "15.46 cm (6.088 inch) HD+ Display",
        camera:"8MP + 0.3MP | 5MP Front Camera",
        battery: "4000 mAh Lithium-ion Polymer Battery",
        processor:"Unisoc SC9863A Octa Core Processor"
    },
    {
        name: "Redmi 9i (Midnight Black, 64 GB)  (4 GB RAM)",
        image: "https://rukminim1.flixcart.com/image/416/416/kesv0y80/mobile/h/p/q/redmi-9i-mzb0814in-original-imafvehkgzghyqtp.jpeg?q=70",
        ram: "4 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
        display: "16.59 cm (6.53 inch) HD+ Display ",
        camera:"13MP Rear Camera | 5MP Front Camera",
        battery: "5000 mAh Lithium Polymer Battery",
        processor:"MediaTek Helio G25 Processor" 

    }
    
];

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});




// app.post("/searched", function(req, res){
//     var brand = req.body.brand;
//     var cpu = req.body.cpu;
//     var ram = req.body.ram;
//     var camera = req.body.camera;
//     var mobiledata = {
//         brand: brand, 
//         cpu: cpu,
//         ram : ram,
//         camera: camera
//     }
//     if(brand !== "null"){
     
//         const fetch = require('node-fetch');

//         (async () => {
//         const where = encodeURIComponent(JSON.stringify({
//             "Brand": brand
//         }));
//         const response = await fetch(
//             `https://parseapi.back4app.com/classes/Cellphonedataset_Dataset_Cell_Phones_Model_Brand?limit=100&where=${where}`,
//             {
//             headers: {
//                 'X-Parse-Application-Id': 'rzoYwhVACc9O1xzTYXAqflwPjEuTA8H2WrKQVYFq', 
//                 'X-Parse-REST-API-Key': '8CSW7JvX8jys49fjY3knITiZrz3yyZUN4WNluGMR', 
//             }
//             }
//         );
//         var data = await response.json(); // Here you have the data that you need

//         // var nonparsed = JSON.stringify(data, null, 2);
//         // var parseddata= JSON.parse(nonparsed);
//         // console.log(parseddata.results[0]);
//         res.render("searched", {data: data.results});
//         })();
//             }
//     if(cpu !== "null" ){
//         if(cpu == "Accending"){
//             const fetch = require('node-fetch');

//             (async () => {
//             const where = encodeURIComponent(JSON.stringify({
//                 "Brand": {
//                 "$exists": true
//                 }
//             }));
//             const response = await fetch(
//                 `https://parseapi.back4app.com/classes/Cellphonedataset_Dataset_Cell_Phones_Model_Brand?limit=100&order=CPU&where=${where}`,
//                 {
//                 headers: {
//                     'X-Parse-Application-Id': 'rzoYwhVACc9O1xzTYXAqflwPjEuTA8H2WrKQVYFq', // This is your app's application id
//                     'X-Parse-REST-API-Key': '8CSW7JvX8jys49fjY3knITiZrz3yyZUN4WNluGMR', // This is your app's REST API key
//                 }
//                 }
//             );
//             const data = await response.json(); // Here you have the data that you need
//             // console.log(JSON.stringify(data, null, 2));
//             res.render("searched", {data: data.results});
//             })();
//         }
//         if(cpu == "Decending"){
//             const fetch = require('node-fetch');

//             (async () => {
//             const where = encodeURIComponent(JSON.stringify({
//                 "Brand": {
//                 "$exists": true
//                 }
//             }));
//             const response = await fetch(
//                 `https://parseapi.back4app.com/classes/Cellphonedataset_Dataset_Cell_Phones_Model_Brand?limit=100&order=-CPU&where=${where}`,
//                 {
//                 headers: {
//                     'X-Parse-Application-Id': 'rzoYwhVACc9O1xzTYXAqflwPjEuTA8H2WrKQVYFq', // This is your app's application id
//                     'X-Parse-REST-API-Key': '8CSW7JvX8jys49fjY3knITiZrz3yyZUN4WNluGMR', // This is your app's REST API key
//                 }
//                 }
//             );
//             const data = await response.json(); // Here you have the data that you need
//             // console.log(JSON.stringify(data, null, 2));
//             res.render("searched", {data: data.results});
//             })();
//         }
//     }
//     if(camera !== "null" ){
//         if(camera == "Accending"){
//             const fetch = require('node-fetch');

//             (async () => {
//             const response = await fetch(
//                 'https://parseapi.back4app.com/classes/Cellphonedataset_Dataset_Cell_Phones_Model_Brand?limit=100&order=Primary_camera',
//                 {
//                 headers: {
//                     'X-Parse-Application-Id': 'rzoYwhVACc9O1xzTYXAqflwPjEuTA8H2WrKQVYFq', // This is your app's application id
//                     'X-Parse-REST-API-Key': '8CSW7JvX8jys49fjY3knITiZrz3yyZUN4WNluGMR', // This is your app's REST API key
//                 }
//                 }
//             );
//             const data = await response.json(); // Here you have the data that you need
//             // console.log(JSON.stringify(data, null, 2));
//             res.render("searched", {data: data.results});
//             })();   
//         }
//         if(camera == "Decending"){
//             const fetch = require('node-fetch');

//             (async () => {
//             const response = await fetch(
//                 'https://parseapi.back4app.com/classes/Cellphonedataset_Dataset_Cell_Phones_Model_Brand?limit=100&order=-Primary_camera',
//                 {
//                 headers: {
//                     'X-Parse-Application-Id': 'rzoYwhVACc9O1xzTYXAqflwPjEuTA8H2WrKQVYFq', // This is your app's application id
//                     'X-Parse-REST-API-Key': '8CSW7JvX8jys49fjY3knITiZrz3yyZUN4WNluGMR', // This is your app's REST API key
//                 }
//                 }
//             );
//             const data = await response.json(); // Here you have the data that you need
//             // console.log(JSON.stringify(data, null, 2));
//             res.render("searched", {data: data.results});
//             })();   
//         }
//     }
//     if(ram !== "null" ){
//         if(ram == "Accending"){
//             const fetch = require('node-fetch');

//             (async () => {
//                 const response = await fetch(
//                   'https://parseapi.back4app.com/classes/Cellphonedataset_Dataset_Cell_Phones_Model_Brand?limit=100&order=RAM',
//                   {
//                     headers: {
//                       'X-Parse-Application-Id': 'rzoYwhVACc9O1xzTYXAqflwPjEuTA8H2WrKQVYFq', // This is your app's application id
//                       'X-Parse-REST-API-Key': '8CSW7JvX8jys49fjY3knITiZrz3yyZUN4WNluGMR', // This is your app's REST API key
//                     }
//                   }
//                 );
//             const data = await response.json(); // Here you have the data that you need
//             // console.log(JSON.stringify(data, null, 2));
//             res.render("searched", {data: data.results});
//             })();   
//         }
//         if(ram == "Decending"){
//             const fetch = require('node-fetch');

//             (async () => {
//                 const response = await fetch(
//                   'https://parseapi.back4app.com/classes/Cellphonedataset_Dataset_Cell_Phones_Model_Brand?limit=100&order=-RAM',
//                   {
//                     headers: {
//                       'X-Parse-Application-Id': 'rzoYwhVACc9O1xzTYXAqflwPjEuTA8H2WrKQVYFq', // This is your app's application id
//                       'X-Parse-REST-API-Key': '8CSW7JvX8jys49fjY3knITiZrz3yyZUN4WNluGMR', // This is your app's REST API key
//                     }
//                   }
//                 );
//             const data = await response.json(); // Here you have the data that you need
//             // console.log(JSON.stringify(data, null, 2));
//             res.render("searched", {data: data.results});
//             })();   
//         }
//     }
// });



app.use("/products", productroutes);
app.use("/products/:id/comments",commentroutes);
app.use("/",indexroutes);




const port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log("The Product Portfolio server has started");
});