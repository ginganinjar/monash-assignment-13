var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burgers.js");

// route to delete the burgers
router.delete("/api/del/:id", function (req, res) {
  let delThisBurger = "(idburgers = " + req.params.id + ")";

  burger.delete(delThisBurger, function (result) {});

  burger.selectAll(function (data) {
    var burgerObj = {
      burger: data,
    };
    res.render("index", burgerObj);
  });
});

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgerObj = {
      burger: data,
    };

    res.render("index", burgerObj);
  });
});

router.post("/api/burger", function (req, res) {
  burger.insertOne(
    ["name", "status", "action_date"],
    [req.body.name, req.body.status, req.body.action_date],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

// change status from server to null and vice versa
router.put("/api/change/:id", function (req, res) {

  let value1 = 'status = ""';
  let value2 = "(idburgers = " + req.params.id + ")";
  let value3 = 'status = "served"';
  let likeSearch = "LIKE " + req.params.id;

  burger.getStatus("idburgers", likeSearch, function (result) {
    // identify the status of the object
    let theResult = result[0].status;

    // if the status is serverd = change it to null

    if (theResult == "served") {
      burger.updateOne(value1, value2, function (result) {});
    } else {
     
      // send back
      burger.updateOne(value3, value2, function (result) {});
    }

    // ok now lets refresh to entire form - get an update of all objects
    // and display accordingly.

    burger.selectAll(function (data) {
      var burgerObj = {
        burger: data,
      };
      res.render("index", burgerObj);
    });

    // refresh index here
  });
});

// Export routes for server.js to use.
module.exports = router;
