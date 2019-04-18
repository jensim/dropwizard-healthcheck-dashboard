const express = require("express");
const asyncHandler = require("express-async-handler");
const hostController = require("../controllers/host.controller");
const Host = require("../models/host.model");

const router = express.Router();
module.exports = router;

router.route("/").get(asyncHandler(async (req, res) => {
  for await (const host of Host.find()) {
    res.write(host);
  }
  res.end();
}));

router.route("/").post(asyncHandler(async (req, res) => {
  console.log(`Saving a new host ${JSON.stringify(req.body, null, "\t")}`);
  let saved = await hostController.insert(req.body);
  res.send(saved);
}));

return router;
