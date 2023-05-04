const express = require('express');
const Comics = require('../services/comics.service');
const sendResponse = require('../helpers/sendResponse');

function comics(app) {
  const router = express.Router();
  const ComicsAPI = new Comics();

  app.use('/api/v1/comics', router);

  router.get('/', async (req, res) => {
    try {
      const result = await ComicsAPI.getAll();
      sendResponse(res, result.data);
    } catch (e) {
      sendResponse(res, e);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await ComicsAPI.getById(id);
      sendResponse(res, result.data);
    } catch (e) {
      sendResponse(res, e);
    }
  });

  router.post('/search', async (req, res) => {
    try {
      const { title, offset } = req.body;
      const result = await ComicsAPI.getByTitle(title, offset);
      sendResponse(res, result.data);
    } catch (e) {
      sendResponse(res, e);
    }
  });

}

module.exports = comics;