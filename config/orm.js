const connection = require("../config/connection.js");

function objToSql(ob) {
  const arr = [];

  for (let key in ob) {
    let value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(`${key} = ${value}`);
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: function (tableInput, cb) {
    connection.query(`SELECT * FROM ${tableInput};`, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?`;
    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    const queryString = `UPDATE ${table} SET ${objToSql(
      objColVals
    )} WHERE ${condition}`;

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;
