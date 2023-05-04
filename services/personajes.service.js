const axios = require('axios');
const { MARVEL_API, MARVEL_PUBLIC_KEY, MARVEL_HASH } = require('./../config');

class Personajes {

  #queryParams = `apikey=${MARVEL_PUBLIC_KEY}&ts=1&hash=${MARVEL_HASH}&orderBy=name&limit=15`;

  async getAll(offset = 0) {
    try {
      const url = `${MARVEL_API}/characters?${this.#queryParams}&offset=${offset}`;
      return await axios.get(url);
    } catch (e) {
      if (e.response) throw e.response;
      else throw e;
    }
  }

  async getByName(name, offset) {
    try {
      const url = `${MARVEL_API}/characters?${this.#queryParams}&nameStartsWith=${name}&offset=${offset}`;
      return await axios.get(url);
    } catch (e) {
      if (e.response) throw e.response;
      else throw e;
    }
  }

}

module.exports = Personajes;