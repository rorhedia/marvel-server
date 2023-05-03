const { eventEmitter } = require('../helpers/emitter');
const { LOG_EMITTER } = require('../config');

const sendResponse = (res, data) => {
  const estatusCode = data.code || data.status || 500;
  let info = '';
  let response = data;

  if (estatusCode === 500) {
    info = JSON.stringify(data.stack);
    response = { status: 'Error' }
  } else if (estatusCode >= 200 && estatusCode < 300) {
    const { code, status, etag } = data;
    info = JSON.stringify({ code, status, etag });
  } else {
    info = JSON.stringify(data.data);
    response = data.data;
  }

  eventEmitter.emit(LOG_EMITTER, { info, estatusCode });
  return res.status(estatusCode).json(response);
}

module.exports = sendResponse;