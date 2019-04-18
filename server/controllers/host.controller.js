const Joi = require("joi");
const Host = require("../models/host.model");

const hostSchema = Joi.object({

});

async function insert(host) {
  delete host.archived;
  host = await Joi.validate(host, hostSchema, {abortEarly: false});
  return await new Host(host).save();
}

module.exports = {
  insert,
};
