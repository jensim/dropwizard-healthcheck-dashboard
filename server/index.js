// config should be imported before importing any other file
const config = require("./config/config");
const app = require("./config/express");
require("./config/mongoose");
const chalk = require("chalk");

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  let server = app.listen(config.port, () => {
    console.info(chalk.green.underline.bold(`Server started on port ${config.port} (${config.env})`));
  });
  require("./config/socket-io")(server, app);
}

module.exports = app;
