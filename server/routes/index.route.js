const express = require("express");
const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) =>
  res.send("OK"),
);

router.use("/auth", require("./auth.route"));
router.use("/user", require("./user.route"));
router.use("/host", require("./host.route"));
router.use("/dashboard", require("./dashboard.route"));

module.exports = router;
