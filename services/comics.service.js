const axios = require('axios');
const { MARVEL_API, MARVEL_PUBLIC_KEY, MARVEL_HASH } = require('./../config');

class Comics {

  #queryParams = `apikey=${MARVEL_PUBLIC_KEY}&ts=1&hash=${MARVEL_HASH}&orderBy=title&limit=15`;

  async getAll(offset = 0) {
    try {
      const url = `${MARVEL_API}/comics?${this.#queryParams}&offset=${offset}`;
      return await axios.get(url);
    } catch (e) {
      if (e.response) throw e.response;
      else throw e;
    }
  }

  async getById(id, offset) {
    try {
      const url = `${MARVEL_API}/comics/${id}?${this.#queryParams}&offset=${offset}`;
      return await axios.get(url);
    } catch (e) {
      if (e.response) throw e.response;
      else throw e;
    }
  }

  async getByTitle(title, offset) {
    try {
      const url = `${MARVEL_API}/comics?${this.#queryParams}&title=${title}&offset=${offset}`;
      return await axios.get(url);
    } catch (e) {
      if (e.response) throw e.response;
      else throw e;
    }
  }

}

module.exports = Comics;