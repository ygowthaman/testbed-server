const model = require("../models");
const destinationDto = model.destination;
const db = require("../config/db.config");

const table_name = "destination";

exports.getAll = (req, res) => {
  const results = db.all(`SELECT * FROM ${table_name}`, []);
  res.send({ data: results });
};
