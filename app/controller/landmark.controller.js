const model = require("../models");
const landmarkDto = model.landmark;
const db = require("../config/db.config");

const table_name = "landmark";

exports.getAll = (req, res) => {
  const results = db.all(`SELECT * FROM ${table_name}`, []);
  res.send({ data: results });
};
