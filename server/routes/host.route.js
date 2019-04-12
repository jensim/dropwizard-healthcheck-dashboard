const express = require('express');

const router = express.Router();
module.exports = router;

router.get('/', function (req, res) {
  req.app.get('io').emit('chat message', 'Someone requested hosts on http:GET');
  res.send('Birds home page')
});

return router;

