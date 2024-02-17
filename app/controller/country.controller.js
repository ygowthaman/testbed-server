const model = require("../models");
const countryDto = model.country;
const db = require("../config/db.config");

const table_name = "country";

exports.create = (req, res) => {
  console.log("Called!");
  const creationDate = new Date();
  const create_query =
    `INSERT INTO ${table_name} VALUES ` +
    `(@country_uuid, @country_name, @year, @month, @day, @title_image)`;
  params = {
    country_uuid: null,
    country_name: req.body.countryName,
    year: creationDate.getFullYear(),
    month: creationDate.getMonth(),
    day: creationDate.getDate(),
    title_image: req.body.titleImage,
  };
  console.log(create_query);
  const data = db.run(create_query, params);
  res.send({ data });
};

exports.update = (req, res) => {
  const creationDate = new Date();
  let update_query = `UPDATE ${table_name} SET `;
  let update_query_array = [];
  update_query_array.push(`country_name = '${req.body.countryName}'`);
  update_query_array.push(`title_image = '${req.body.titleImage}'`);
  update_query_array.push(`year = '${creationDate.getFullYear()}'`);
  update_query_array.push(`month = '${creationDate.getMonth()}'`);
  update_query_array.push(`day = '${creationDate.getDate()}'`);

  update_query = update_query + update_query_array.join(", ");
  update_query = update_query + ` WHERE country_uuid = ${req.params.id}`;
  const results = db.run(update_query, []);
  res.send({ data: results });
};

exports.delete = (req, res) => {
  const delete_query =
    `DELETE FROM ${table_name} ` + `WHERE country_uuid=${req.params.id}`;
  const results = db.run(delete_query, []);
  res.send({ data: results });
};

exports.getAll = (req, res) => {
  const results = db.all(`SELECT * FROM ${table_name}`, []);
  let data = [];
  if (results && results.length > 0) {
    data = results.map((r) => {
      return {
        countryName: r.country_name,
        description: r.description,
        countryUuid: r.country_uuid,
        titleImage: r.title_image,
      };
    });
  }
  res.send({ data });
};

exports.get = (req, res) => {
  const get_query =
    `SELECT * FROM ${table_name} ` + `WHERE country_uuid=${req.params.id}`;
  const result = db.get(get_query, []);
  const data = {
    countryName: result.country_name,
    countryUuid: result.country_uuid,
    year: result.year,
    month: result.month,
    day: result.day,
    titleImage: result.title_image,
  };

  res.send({ data });
};
