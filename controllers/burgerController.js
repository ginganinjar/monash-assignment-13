var express = require("express");
var router = express.Router();



// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

     var burger = {
        text: "blabla",
        text2 : "bla bla bla"
      };
   
    res.render("index",burger);

    });
  

  module.exports = router;