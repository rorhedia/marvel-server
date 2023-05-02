const axios = require('axios');
const { MARVEL_API, MARVEL_PUBLIC_KEY, MARVEL_HASH } = require('./../config');

class Comics {

  #queryParams = `apikey=${MARVEL_PUBLIC_KEY}&ts=1&hash=${MARVEL_HASH}&orderBy=title`;

  async getAll() {
    try {
      const url = `${MARVEL_API}/comics?${this.#queryParams}`;
      return await axios.get(url);
    } catch (e) {
      console.log(e);
    }
  }

}

module.exports = Comics;