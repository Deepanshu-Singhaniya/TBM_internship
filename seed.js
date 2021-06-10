var mongoose = require("mongoose");
var Product = require("./models/product");
var Comment   = require("./models/comment");

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

function seedDB(){

//    Mobile.deleteMany({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log("removed mobiles!");
//         Comment.deleteMany({}, function(err) {
//             if(err){
//                 console.log(err);
//             }
//             console.log("removed comments!");
//              //add a few campgrounds
//             mobiles.forEach(function(dmobile){
//                 Mobile.create(dmobile, function(err, mobile){
//                     if(err){
//                         console.log(err)
//                     } else {
//                         console.log("added a mobile");
//                         //create a comment
//                         Comment.create(
//                             {
//                                 text: "This mobile is great, but I serves more better display",
//                                 author: "Homer"
//                             }, function(err, comment){
//                                 if(err){
//                                     console.log(err);
//                                 } else {
//                                     mobile.comments.push(comment);
//                                     mobile.save();
//                                     console.log("Created new comment");
//                                 }
//                             });
//                     }
//                 });
//             });
//         });
//     }); 
//     
}

module.exports = seedDB;
