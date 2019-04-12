const mongoose = require('mongoose');

const HostSchema = new mongoose.Schema({
  healthCheckUrl: {
    type: String,
    required: true,
    unique: true
  },
  group: {
    type: String,
    required: false
  }

}, {
  versionKey: false
});

module.exports = mongoose.model('Host', HostSchema);
