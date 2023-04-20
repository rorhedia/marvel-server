const mongoose = require("mongoose");
const { DB_PORT, DB_HOST, DB_NAME } = require('../config');

const db = () =>
  mongoose.connect(
    `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

module.exports = db;