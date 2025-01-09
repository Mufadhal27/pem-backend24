// import mysql
const mysql = require("mysql");


// import dotenv dan jalankan method config
require("dotenv").config();

// destructuring object process.env
const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
} = process.env;

// update konfigurasi database dari file .env
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

// kode lain setelahnya
module.exports = db;