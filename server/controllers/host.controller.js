const Joi = require("joi");
const Host = require("../models/host.model");
const url = require("url");

const hostSchema = Joi.object({
  healthCheckUrl: Joi.string().required(),
  group: Joi.string().max(50),
});

/**
 * Insert and ignore duplicate errors, return existing Host or newly created
 */
async function insert(host) {
  try {
    delete host.archived;
    host = await Joi.validate(host, hostSchema, {abortEarly: false});
    host.hostName = url.parse(host.healthCheckUrl).hostname;
    return await new Host(host).save();
  } catch (e) {
    if (e.name === "MongoError" && e.code === 11000) {
      return await Host.findOne({healthCheckUrl: host.healthCheckUrl});
    } else {
      throw e;
    }
  }
}

module.exports = {
  insert,
};
