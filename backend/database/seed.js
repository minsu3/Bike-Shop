const db = require('./database.js');

const users_list = [
  {
    first_name: "",
    last_name: "",
    email: "",
    street_number: "",
    street_name: "",
    city: "",
    state: "",
    zip_code: "",
    phone_number: "",
    registration_date: ""
  },
]

const bike_make_list = [
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
    'CREATE TABLE users (first_name TEXT, last_name TEXT, email NVARCHAR(320) - 64, street_number INTEGER, street_name TEXT, city TEXT, state TEXT, zip_code TEXT, phone_number TEXT, registration_date DATETIME )'
    db.run(createUsersTableQuery, error=> {
      if(error) console.error("Error creating 'users' table");
      else console.log("Created 'users' table");
    })

  const insertUsersQuery = 'INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  for(let user of users_list) {
    let userData = [user.first_name, user.last_name, user.email, user.street_number, user.street_name, user.city, user.state, user.zip_code, user.phone_number, user.registration_date];
    db.run(insertUsersQuery, userData, error=> {
      if(error) console.log("Could not insert user", [user.first_name, user.last_name], error);
      else console.log(`Inserted user with name ${user.first_name} ${user.last_name} into 'users' table`);
    })
  }

  // Drop, Create, Insert Bikes Makes list and table 
  const dropBikeMakeTableQuery = 'DROP TABLE IF EXISTS bike_make';
  db.run(dropBikeMakeTableQuery, error=> {
    if(error) console.error("Error dropping 'bike_make' table");
    else console.log("Dropped 'bike_make' table");
  })

  const createBikeMakeTableQuery = 
    'CREATE TABLE bike_make (brand TEXT, type TEXT, category TEXT)'
    db.run(createBikeMakeTableQuery, error=> {
      if(error) console.error("Error creating 'bike_make' table");
      else console.log("Created 'bike_make' table");
    })

  const insertBikeMakeQuery = 'INSERT INTO bike_make VALUES (?, ?, ?)';
  for (let bikemake of bike_make_list) {
    let bikeMakeData = [bikemake.brand, bikemake.type, bikemake.category];
    db.run(insertBikeMakeQuery, bikeMakeData, error=> {
      if (error) console.log("Could not insert into bike_make table", [bikemake.brand, bikemake.type, bikemake.category], error);
      else console.log(`Inserted bike into bike_make table`);
    })
  }

  // Drop, Create, Insert Bike Specs table
  const dropBikeSpecsTableQuery = 'DROP TABLE IF EXISTS bike_specs';
  db.run(dropBikeSpecsTableQuery, error=> {
    if (error) console.error("Error dropping 'bike_specs' table");
    else console.log("Dropped 'bike_specs' table");
  })

  const createBikeSpecsTableQuery = 
    'CREATE TABLE bike_make (brand_id INTEGER, size TEXT, color TEXT, material TEXT, serial_number INTEGER, component TEXT)';
    db.run(createBikeSpecsTableQuery, error=> {
      if(error) console.error("Error creating 'bike_specs' table");
      else console.log("Created 'bike_specs' table");
    })

  const insertBikeSpecsQuery = 'INSERT INTO bike_specs VALUES (?, ?, ?, ?, ?, ?)';
  for (let bikespec of bike_specs_list) {
    let bikeSpecData = [bikespec.brand_id, bikespec.type, bikespec.category];
    db.run(insertBikeSpecsQuery, bikeSpecData, error=> {
      if (error) console.log("Could not insert into bike_specs table", [bikespec.brand_id, bikespec.type, bikespec.category], error);
      else console.log(`Inserted bike into bike_specs table`);
    })
  }

  // JOIN TABLES: ORDERS TABLE
  const dropOrdersTableQuery = 'DROP TABLE IF EXISTS orders';
  db.run(dropOrdersTableQuery, error=> {
    if(error) console.log("Erro dropping 'orders' table");
    else console.log("Dropped 'orders' table");
  })

  const createOrdersTableQuery = 'CREATE TABLE orders (users_id INTEGER, bikespec_id INTEGER)';
  db.run(createOrdersTableQuery, error=> {
    if(error) console.error("Error creating 'orders' table");
    else console.log("Create 'orders' table");
  })

})