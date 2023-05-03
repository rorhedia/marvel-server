require('dotenv').config();

const config = {
  SERVER_PORT: process.env.PORT || 3000,
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 27017,
  DB_NAME: process.env.DB_NAME || 'dev',
  MARVEL_API: process.env.MARVEL_API || '',
  MARVEL_PUBLIC_KEY: process.env.PUBLIC_KEY || '',
  MARVEL_HASH: process.env.HASH || '',
  LOG_EMITTER: 'addLog'
}

module.exports = config;