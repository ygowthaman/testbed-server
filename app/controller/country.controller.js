const model = require("../models");
const countryDto = model.country;
const db = require("../config/db.config");

const table_name = "country";

// exports.create = (req, res) => {
//   const creation_date = new Date();
//   const create_query =
//     `INSERT INTO ${table_name} VALUES ` +
//     `(@id, @title, @author, @private, @description, @created_at)`;
//   params = {
//     id: null,
//     title: req.body.title,
//     author: req.body.author,
//     private: req.body.private,
//     description: req.body.description,
//     created_at: creation_date.toLocaleString(),
//   };
//   const data = db.run(create_query, params);
//   res.send({ data });
// };

// exports.update = (req, res) => {
//   let update_query = `UPDATE ${table_name} SET `;
//   let update_query_array = [];
//   if (req.body.title) {
//     update_query_array.push(`title = '${req.body.title}'`);
//   }
//   if (req.body.description) {
//     update_query_array.push(`description = '${req.body.description}'`);
//   }
//   if (req.body.author) {
//     update_query_array.push(`author = '${req.body.author}'`);
//   }
//   if (req.body.private) {
//     update_query_array.push(`private = '${req.body.private}'`);
//   }
//   update_query = update_query + update_query_array.join(', ');
//   update_query = update_query + ` WHERE id = ${req.params.id}`
//   const results = db.run(update_query, []);
//   res.send({ data: results });
// };

// exports.delete = (req, res) => {
//   const delete_query =
//     `DELETE FROM ${table_name} ` +
//     `WHERE id=${req.params.id}`;
//   const results = db.run(delete_query, []);
//   res.send({ data: results });
// };

// exports.get = (req, res) => {
//   const get_query =
//     `SELECT * FROM ${table_name} ` + `WHERE id=${req.params.id}`;
//   const results = db.get(get_query, []);
//   res.send({ data: results });
// };
// exports.getByTitle = (req, res) => {
//   const get_query =
//     `SELECT * FROM ${table_name} ` + `WHERE title LIKE '%${req.params.title}%'`;
//   console.log(get_query);
//   const results = db.all(get_query, []);
//   res.send({ data: results });
// };
// exports.getByAuthor = (req, res) => {
//   const get_query =
//     `SELECT * FROM ${table_name} ` + `WHERE author LIKE '%${req.params.author}%'`;
//   const results = db.all(get_query, []);
//   res.send({ data: results });
// };
// exports.getByPrivate = (req, res) => {
//   const get_query =
//     `SELECT * FROM ${table_name} ` + `WHERE private=${req.params.private}`;
//   const results = db.all(get_query, []);
//   res.send({ data: results });
// };

exports.getAll = (req, res) => {
  const results = db.all(`SELECT * FROM ${table_name}`, []);
  let data = [];
  if (results && results.length > 0) {
    data = results.map((r) => {
      return {
        countryName: r.country_name,
        description: r.description,
        countryUuid: r.country_uuid,
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
  }

  res.send({ data });
};
