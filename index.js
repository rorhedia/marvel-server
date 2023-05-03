const express = require('express');
const cors = require("cors");

const { SERVER_PORT } = require('./config');
const db = require('./helpers/db');

const auth = require('./routes/auth.route');
const users = require('./routes/users.route');
const comics = require('./routes/comics.route');

const app = express();
app.use(cors());
app.use(express.json());

/* Routing */
auth(app);
users(app);
comics(app);

app.get('/', (req, res) => {
  res.json({ path: 'healt', SERVER_PORT });
});

db().then(() => {
  app.listen(SERVER_PORT);
  console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
}).catch(err => {
  console.log(`Error: ${err}`);
})
