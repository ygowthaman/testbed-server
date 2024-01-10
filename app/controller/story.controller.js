const model = require("../models");
const story = model.story;

const db_name = "storyboard_db";
const table_name = "story";

exports.create = (req, res) => {
  // const creation_date = new Date();
  // const create_query =
  //   `INSERT INTO ${table_name} VALUES ` +
  //   `(@id, @title, @author, @private, @description, @created_at)`;
  // params = {
  //   id: null,
  //   title: req.body.title,
  //   author: req.body.author,
  //   private: req.body.private,
  //   description: req.body.description,
  //   created_at: creation_date.toLocaleString(),
  // };
  // const data = db.run(create_query, params);
  // res.send({ data });
};

exports.update = (req, res) => {
  // const update_query =
  //   `UPDATE ${db_name}.${table_name} SET ` +
  //   `name = '${req.body.name}', ` +
  //   `description = '${req.body.description}', ` +
  //   `author = '${req.body.author}', ` +
  //   `private = ${req.body.private} ` +
  //   `WHERE story_id = ${db.connection.escape(req.params.id)}`;
  // const results = db.run(update_query, []);
  // res.send({ data: results });
};

exports.delete = (req, res) => {
  // const delete_query =
  //   `DELETE FROM ${db_name}.${table_name} ` +
  //   `WHERE story_id=${db.connection.escape(req.params.id)}`;
  // const results = db.run(delete_query, []);
  // res.send({ data: results });
};

exports.get = (req, res) => {
  // const get_query =
  //   `SELECT * FROM ${table_name} ` + `WHERE story_id=${req.params.id}`;
  // const results = db.get(get_query, []);
  // res.send({ data: results });
};

exports.getAll = (req, res) => {
  // const results = db.all(`SELECT * FROM ${table_name}`, []);
  // res.send({ data: results });
};
