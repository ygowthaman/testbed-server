const model = require("../models");
const imageDto = model.image;
const db = require("../config/db.config");

const table_name = "images";

exports.getAll = (req, res) => {
  const results = db.all(`SELECT * FROM ${table_name}`, []);
  res.send({ data: results });
};
