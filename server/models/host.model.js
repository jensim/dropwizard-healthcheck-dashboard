const mongoose = require("mongoose");
const url = require("url");

const HostSchema = new mongoose.Schema({
  healthCheckUrl: {
    type: String,
    required: true,
    unique: true,
  },
  hostName: {
    type: String,
    required: true,
    default: () => url.parse(this.healthCheckUrl).hostname,
  },
  group: {
    type: String,
    required: false,
  },
  archived: {
    type: Boolean,
    required: true,
    default: false,
  }
}, {
  versionKey: false,
});

module.exports = mongoose.model("Host", HostSchema);
