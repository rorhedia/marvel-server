const express = require('express');
const Personajes = require('../services/personajes.service');
const sendResponse = require('../helpers/sendResponse');

function personajes(app) {
  const router = express.Router();
  const personajesAPI = new Personajes();

  app.use('/api/v1/personajes', router);

  router.get('/', async (req, res) => {
    try {
      const result = await personajesAPI.getAll();
      sendResponse(res, result.data);
    } catch (e) {
      sendResponse(res, e);
    }
  });

  router.post('/search', async (req, res) => {
    try {
      const { name, offset } = req.body;
      const result = await personajesAPI.getByName(name, offset);
      sendResponse(res, result.data);
    } catch (e) {
      sendResponse(res, e);
    }
  });

}

module.exports = personajes;