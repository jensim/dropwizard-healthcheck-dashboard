const express = require("express");
const asyncHandler = require("express-async-handler");
const dashboardController = require("../controllers/dashboard.controller");
const Dashboard = require("../models/dashboard.model");

const router = express.Router();
module.exports = router;

router.route("/").get(asyncHandler(async (req, res) => {
  for await (const dashboard of Dashboard.find()) {
    res.write(dashboard);
  }
  res.end();
}));


router.route("/").post(asyncHandler(async (req, res) => {
  console.log(`Saving a new dashboard ${JSON.stringify(req.body, null, "\t")}`);
  let saved = await dashboardController.insert(req.body);
  res.send(saved);
}));

return router;
