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

// Bike Make Table
const createTableSpecializedQuery = 
  `CREATE TABLE IF NOT EXISTS specialized (
    brand TEXT
  )`
const createTableTrekQuery = 
  `CREATE TABLE IF NOT EXISTS trek (
    brand TEXT
  )`
const createTableCannondaleQuery = 
  `CREATE TABLE IF NOT EXISTS cannondale (
    brand TEXT
  )`


const createSpecializedBikeQuery = 
  `CREATE TABLE IF NOT EXISTS specialized_bikes (
    brand_name TEXT,
    type TEXT,
    category TEXT
    size TEXT,
    color TEXT,
    material TEXT, 
    component TEXT
  )`
const createTrekBikeQuery = 
  `CREATE TABLE IF NOT EXISTS trek_bikes (
    brand_name TEXT,
    type TEXT,
    category TEXT
    size TEXT,
    color TEXT,
    material TEXT, 
    component TEXT
  )`
const createCannondaleBikeQuery = 
  `CREATE TABLE IF NOT EXISTS cannondale_bikes (
    brand_name TEXT,
    type TEXT,
    category TEXT
    size TEXT,
    color TEXT,
    material TEXT, 
    component TEXT
  )`
// Order (join table)
const createTableOrdersQuery = 
  `CREATE TABLE IF NOT EXISTS orders (
    users_id INTEGER,
    bikespec_id INTEGER
  )`

  module.exports = database; 