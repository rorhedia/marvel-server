const fs = require("fs").promises;
const path = require('path');
const EventEmitter = require('events');
const { LOG_EMITTER } = require('../config');

const eventEmitter = new EventEmitter();

const getFileName = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = zeroFill(today.getMonth() + 1);
  const day = zeroFill(today.getDate());
  const file = `${year}${month}${day}.log`;
  return path.join(__dirname, `/../logs/${file}`);
};

const zeroFill = (data, fill = 2) => data.toString().padStart(fill, '0');

const getLogFormat = (message, status) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = zeroFill(today.getMonth() + 1);
  const day = zeroFill(today.getDate());
  const hour = zeroFill(today.getHours());
  const minutes = zeroFill(today.getMinutes());
  const seconds = zeroFill(today.getSeconds());
  const milliseconds = zeroFill(today.getMilliseconds(), 3);
  return `${year}/${month}/${day} ${hour}:${minutes}:${seconds}:${milliseconds}  [${status}]     ${message}\r\n`;
}

eventEmitter.on(LOG_EMITTER, ({ info, estatusCode }) => {
  const log = getLogFormat(info, estatusCode);
  setImmediate(() => {
    fs.appendFile(getFileName(), log);
  });
});

module.exports = { eventEmitter };