const Host = require("../models/host.model");

module.exports = function configure(server, app) {
  let io = require("socket.io")(server);
  app.set("io", io);

  setInterval(function () {
    io.emit('time', new Date);
  }, 5000);

  io.on('connection', function (socket) {
    socket.emit('chat message', 'hello and welcome');
    socket.on('chat message', function (data) {
      io.emit('chat message', data)
    });
    socket.on('refresh hosts', () => {
      (async () => {
        for await (const host of Host.find()) {
          socket.emit('refresh hosts', host);
        }
      })();
    });
  });
};
