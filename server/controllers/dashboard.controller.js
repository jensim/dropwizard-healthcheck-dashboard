const Joi = require("joi");
const Dashboard = require("../models/dashboard.model");
const Host = require("../models/host.model");

const dashboardSchema = Joi.object({
  name: Joi.string().max(100).required(),
  description: Joi.string().max(500),
  archived: Joi.boolean(),
});

async function insert(dashboard) {
  delete dashboard._id;
  delete dashboard.archived;
  dashboard = await Joi.validate(dashboard, dashboardSchema, {abortEarly: false});
  return await new Dashboard(dashboard).save();
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
  insert,
  removeHost,
};
