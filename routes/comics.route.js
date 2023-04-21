const express = require('express');
const Comics = require('../services/comics.service');

function comics(app) {
  const router = express.Router();
  const ComicsAPI = new Comics();

  app.use('/api/v1/comics', router);

  router.get('/', async (req, res) => {
    const result = await ComicsAPI.getAll();
    return res.json(result.data);
  });

}

module.exports = comics;