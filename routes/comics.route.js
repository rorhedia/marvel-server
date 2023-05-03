const express = require('express');
const Comics = require('../services/comics.service');

function comics(app) {
  const router = express.Router();
  const ComicsAPI = new Comics();

  app.use('/api/v1/comics', router);

  router.get('/', async (req, res) => {
    try {
      const result = await ComicsAPI.getAll();
      return res.json(result.data);
    } catch (e) {
      console.log(e);
    }
  });

  router.post('/search', async (req, res) => {
    try {
      const { title, offset } = req.body;
      const result = await ComicsAPI.getByTitle(title, offset);
      return res.json(result.data);
    } catch (e) {
      console.log(e);
    }
  });

}

module.exports = comics;