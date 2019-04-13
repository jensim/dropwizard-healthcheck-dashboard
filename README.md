# Dropwizard Healthcheck Dashboard
[![Build Status](https://travis-ci.org/jensim/dropwizard-healthcheck-dashboard.svg?branch=master)](https://travis-ci.org/jensim/dropwizard-healthcheck-dashboard)
[![Known Vulnerabilities](https://snyk.io/test/github/jensim/dropwizard-healthcheck-dashboard/badge.svg?targetFile=package.json)](https://snyk.io/test/github/jensim/dropwizard-healthcheck-dashboard?targetFile=package.json)
[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)

![Dashboard view](docs/2.0_Dashboard.png)

----
## Tech stack
- "MEAN-stack" (Mongo/Mongoose, Express.js, Angular, Node)
- Socket.IO

----
## Goals / To-do:s

### Planning
- [x] Start creating wiremocks:
[Done =)](https://wireframepro.mockflow.com)
- [x] Create /docs for GH pages
- [ ] Plan app flow

### Infra
- [ ] Run e2e tests on travis
- [ ] AutoDeploy to Heroku on successful build
 
### Front-end
- [ ] FE: (user) configurable dashboards showing selected service healthchecks
- [ ] FE: (user) add new services by suggesting a http endpoint 
- [ ] FE: (admin) suggest a url and an xpath for the server ton crawl a registry of hosts
- [ ] FE: (admin) suggest a url and an json-path for the server ton crawl a registry of hosts
- [ ] FE: (admin) Define service url validation rules
- [ ] FE: Require admin user role
- [ ] FE: (admin) GUI for setting default values/settings

### Back-end
- [ ] BE: Try out suggested host url, and validate the response before saving it
- [ ] BE: Crawl saved service healthcheck urls and update their status
- [ ] BE: Able to set the crawl-interval per host, and fallback to default
- [ ] BE: have default settings configured in database

