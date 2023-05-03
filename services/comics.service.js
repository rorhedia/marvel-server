const axios = require('axios');
const { MARVEL_API, MARVEL_PUBLIC_KEY, MARVEL_HASH } = require('./../config');

class Comics {

  #queryParams = `apikey=${MARVEL_PUBLIC_KEY}&ts=1&hash=${MARVEL_HASH}&orderBy=title&limit=15`;

  async getAll(offset = 0) {
    try {
      const url = `${MARVEL_API}/comics?${this.#queryParams}&offset=${offset}`;
      return await axios.get(url);
    } catch (e) {
      throw new Error(e);
    }
  }

  async getByTitle(title, offset) {
    try {
      const url = `${MARVEL_API}/comics?${this.#queryParams}&title=${title}&offset=${offset}`;
      return await axios.get(url);
    } catch (e) {
      throw new Error(e);
    }
  }

}

module.exports = Comics;