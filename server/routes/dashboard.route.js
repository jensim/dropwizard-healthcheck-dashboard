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
  res.send(await dashboardController.insert(req.body));
}));

router.route("/url").post(asyncHandler(async (req, res) => {

  await dashboardController.addUrl(req.body.dashboardId, req.body.url);
}));

return router;
