const db = require('./database.js');

const users_list = [
  {
    first_name: "",
    last_name: "",
    email: "",
    street_address_number: "",
    street_name: "",
    city: "",
    state: "",
    zip_code: "",
    phone_number: "",
    registration_date: ""
  },
]

const bikes_make_list = [
  {
    brand: "",
    type: "",
    category: ""
  },
]

const bike_specs_list = [
  {
    brand_id: "",
    size: "",
    color: "",
    material: "",
    serial_number: "",
    component: ""
  }
]

// join tables will be created in seed file


// Let's create a synchronous database function
// Whenever you run seed.js
db.serialize(() => {
  const dropUsersTableQuery = 'DROP TABLE IF EXISTS users';
  db.run(dropUsersTableQuery, error=> {
    if(error) console.error("Error dropping 'users' table");
    else console.log("Dropped 'users' table");
  })

  const createUsersTableQuery = 
    'CREATE TABLE users (first_name TEXT, last_name TEXT, email NVARCHAR(320) - 64, street_address_number INTEGER, street_name TEXT, city TEXT, state TEXT, zip_code TEXT, phone_number TEXT, registration_date DATETIME )'
    db.run(createUsersTableQuery, error=> {
      if(error) console.error("Error createing 'users' table");
      else console.log("Created 'users' table");
    })

  const insertUsersQuery = 'INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  for(let user of users_list) {
    let userData = [user.]
  }
})