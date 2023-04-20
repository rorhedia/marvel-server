const express = require('express');

function auth(app) {
  const router = express.Router();

  app.use('/api/v1/auth', router);

  router.post('/login', (req, res) => {
    return res.json({ result: 'ok' });
  });

}

module.exports = auth;