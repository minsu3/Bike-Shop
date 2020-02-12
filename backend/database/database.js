let sqlite3 = require('sqlite3');
let database = new sqlite3.Database('./database.db');

// User table
const createTableUsersQuery = 
  `CREATE TABLE IF NOT EXISTS users (
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    street_number INTEGER,
    street_name TEXT,
    city TEXT, 
    state TEXT,
    zip_code TEXT,
    phone_number TEXT,
    registration_date DATE
  )`;

//                                                        ************* Bike Make Table *************
const createTableBikeMakeQuery =
  `CREATE TABLE IF NOT EXISTS bike_make (
    brand TEXT,
    type TEXT,
    category TEXT
  )`

//                                                        ************* Bike Details Table *************
const createTableBikeDetailsQuery =
  `CREATE TABLE IF NOT EXISTS bike_details (
    FOREIGN KEY (brand) REFERENCES bike_make(brand),
    brand_id INTEGER, 
    size TEXT,
    color TEXT,
    material TEXT, 
    serial_number INTEGER, 
    component TEXT,
  )`

//                                                        ************* Order (join table) *************

const createTableOrdersQuery =
  `CREATE TABLE IF NOT EXISTS orders (
    users_id INTEGER,
    bike_details_id INTEGER
  )`

module.exports = database; 
