const express = require('express');
const UserService = require('./../services/users.service');

function users(app) {
  const router = express.Router();
  const User = new UserService();

  app.use('/api/v1/users', router);

  router.get('/', async (req, res) => {
    const result = await User.getAll();
    return res.json({ data: result });
  });

}

module.exports = users;