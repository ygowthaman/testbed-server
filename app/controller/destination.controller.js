const model = require("../models");
const destinationDto = model.destination;
const db = require("../config/db.config");

const table_name = "destination";

exports.getAll = (req, res) => {
  const results = db.all(`SELECT * FROM ${table_name}`, []);
  res.send({ data: results });
};

exports.getByCountry = (req, res) => {
  const get_query =
    `SELECT country.country_uuid, ` +
    `country.country_name, ` +
    `country.year, ` +
    `country.month, ` +
    `country.day, ` +
    `${table_name}.destination_uuid, ` +
    `${table_name}.destination_name ` +
    `FROM ${table_name} ` +
    `INNER JOIN country ` +
    `ON country.country_uuid = ${table_name}.country_uuid ` +
    `WHERE ${table_name}.country_uuid IS ${req.params.id}`;
  const results = db.all(get_query, []);

  let data = [];
  if (results && results.length > 0) {
    data = results.map((r) => {
      return {
        countryName: r.country_name,
        countryUuid: r.country_uuid,
        year: r.year,
        month: r.month,
        day: r.day,
        destinationName: r.destination_name,
        destinationUuid: r.destination_uuid,
      };
    });
  }

  res.send({ data });
};
