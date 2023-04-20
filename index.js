require('dotenv').config();
const express = require('express');

const auth = require('./routes/auth.route');

const app = express();
const port = process.env.PORT;

app.use(express.json());

auth(app);

app.get('/', (req, res) => {
  res.json({ path: 'healt', port })
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});