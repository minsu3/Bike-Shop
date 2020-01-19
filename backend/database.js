let sqlite3 = requre('sqlite3');
let database = new sqlite3.Database('./database.db');

// User table
const createTableUsersQuery = 
  `CREATE TABLE IF NOT EXISTS users (
    first_name TEXT,
    last_name TEXT,
    email NVARCHAR(320) - 64,
    street_address_number INTEGER,
    street_name TEXT,
    city TEXT, 
    state TEXT,
    zip_code TEXT,
    phone_number TEXT,
    registration_date DATETIME
  )`;

// Bike Make Table
const createTableBikeMakeQuery = 
  `CREATE TABLE IF NOT EXISTS bike_make (
    brand TEXT,
    type TEXT,
    category TEXT
  )`
// Bike Specs Table
const createTableBikeSpecsQuery = 
  `CREATE TABLE IF NOT EXISTS bike_specs (
    brand_id INTEGER, 
    size TEXT,
    color TEXT,
    material TEXT, 
    serial_number INTEGER, 
    component TEXT
  )`
// Order (join table)
const createTableOrdersQuery = 
  `CREATE TABLE IF NOT EXISTS orders (
    users_id INTEGER,
    bikespec_id INTEGER
  )`

  module.exports = database; 