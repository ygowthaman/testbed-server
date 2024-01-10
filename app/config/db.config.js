const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.resolve('watchtower.db'), { fileMustExist: true, verbose: console.log });

function get(sql, params) {
  return db.prepare(sql).get(params);
}

function all(sql, params) {
  return db.prepare(sql).all(params);
}

function run(sql, params) {
  return db.prepare(sql).run(params);
}

module.exports = {
  get,
  all,
  run
}