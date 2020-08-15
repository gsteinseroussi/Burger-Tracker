const express = require("express");
const burger = require("../models/burgers.js");
const router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body);
  burger.insertOne("burger_name", req.body.burger_name, function (result) {
    console.log(result);
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  console.log("req.body = ", req.body);
  // let devouredState;
  // if (req.body.devoured) {
  //   devouredState = false;
  // } else {
  //   devouredState = true;
  // }
  // console.log(devouredState);
  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
module.exports = router;
