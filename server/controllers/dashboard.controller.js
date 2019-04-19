const Joi = require("joi");
const Dashboard = require("../models/dashboard.model");
const Host = require("../models/host.model");
const hostController = require("./host.controller");

const dashboardSchema = Joi.object({
  name: Joi.string().max(100).required(),
  description: Joi.string().max(500),
  archived: Joi.boolean(),
});
const dashboardAddUrlSchema = Joi.object({
  dashboardId: Joi.string().required(),
  url: Joi.string().required(),
});

/**
 * Insert and ignore duplicate errors, return existing Dashboard or newly created
 */
async function insert(dashboard) {
  try {
    delete dashboard._id;
    delete dashboard.archived;
    dashboard = await Joi.validate(dashboard, dashboardSchema, {abortEarly: false});
    return await new Dashboard(dashboard).save();
  } catch (e) {
    if (e.name === "MongoError" && e.code === 11000) {
      return await Dashboard.findOne({name: dashboard.name});
    } else {
      throw e;
    }
  }
}

/**
 * urlRequest:
 *   dashboardId
 *   url: healthcheck url
 */
async function addUrl(urlRequest) {
  await Joi.validate(urlRequest, dashboardAddUrlSchema, {abortEarly: false});
  let host = await hostController.insert({healthCheckUrl: url});
  await addHost(dashboardId, host._id);
}

async function addHost(dashboardId, hostId) {
  let h = await Host.count({_id: hostId}).exec();
  if (h === 1) {
    await Dashboard.update({_id: dashboardId}, {$addToSet: {hosts: hostId}});
  }
}

async function removeHost(dashboardId, hostId) {
  await Dashboard.update({_id: dashboardId}, {$pull: {hosts: hostId}});
}

async function update(dashboard) {
  delete dashboard.hosts;
  dashboard = await Joi.validate(dashboard, dashboardSchema, {abortEarly: false});
  return await Dashboard.update({_id: dashboard._id}, dashboard);
}

module.exports = {
  addHost,
  addUrl,
  insert,
  removeHost,
};
