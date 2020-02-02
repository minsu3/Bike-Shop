const db = require('./database.js');

const users = [
  {
    first_name: "Minsu",
    last_name: "Kim",
    email: "kim97minsu@gmail.com",
    street_number: "6917",
    street_name: "Corte Pacifica",
    city: "Pleasanton",
    state: "Illinois",
    zip_code: "94566",
    phone_number: "9255963678",
    registration_date: "2019-01-01"
  },
  {
    first_name: "Dann",
    last_name: "Manganti",
    email: "dann@gmail.com",
    street_number: "225",
    street_name: "Bush St.",
    city: "San Francisco",
    state: "California",
    zip_code: "94016",
    phone_number: "0123456789",
    registration_date: "2019-02-02"
  }
];

const bikes_make_list = [
  {
    brand: "specialized",
    type: "road",
    category: "aero"
  },
  {
    brand: "trek",
    type: "mountain",
    category: "enduro"
  },
  {
    brand: "cannondale",
    type: "road",
    category: "lightweight"
  }
]

const bike_details_list = [
  {
    brand: "specialized",
    size: "Medium",
    color: "Black",
    material: "Carbon Fiber",
    serial_number: "12345",
    component: "Shimano"
  },
  {
    brand: "specialized",
    size: "Large",
    color: "Black",
    material: "Aluminum",
    serial_number: "12346",
    component: "Campagnolo"
  },
  {
    brand: "trek",
    size: "Large",
    color: "Blue",
    material: "Carbon Fiber",
    serial_number: "12347",
    component: "Campagnolo"
  },
  {
    brand: "cannondale",
    size: "Large",
    color: "Gray",
    material: "Carbon Fiber",
    serial_number: "12348",
    component: "Shimano"
  }
]

// join tables will be created in seed file


// Whenever you run seed.js
//                                                 ************* Drop, Create, Insert users Table *************

// Let's create a synchronous database function
db.serialize(() => {
  const dropUsersTableQuery = 'DROP TABLE IF EXISTS users';
  db.run(dropUsersTableQuery, error=> {
    if(error) console.error("Error dropping 'users' table");
    else console.log("Dropped 'users' table");
  })

  const createUsersTableQuery = 
    'CREATE TABLE users (first_name TEXT, last_name TEXT, email TEXT, street_number INTEGER, street_name TEXT, city TEXT, state TEXT, zip_code TEXT, phone_number TEXT, registration_date DATE)'
    db.run(createUsersTableQuery, error=> {
      if(error) console.error("Error creating 'users' table");
      else console.log("Created 'users' table");
    })

  const insertUsersQuery = 'INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  for(let user of users) {
    let userData = [user.first_name, user.last_name, user.email, user.street_number, user.street_name, user.city, user.state, user.zip_code, user.phone_number, user.registration_date];
    db.run(insertUsersQuery, userData, error=> {
      if(error) console.log("Could not insert user", [user.first_name, user.last_name], error);
      else console.log(`Inserted user with name ${user.first_name} ${user.last_name} into 'users' table`);
    })
  }

  //                                            ************* Drop, Create, Insert bike_make Table *************

  // Drop, Create, Insert Bikes Makes list and table 
  const dropBikeMakeTableQuery = 'DROP TABLE IF EXISTS bike_make';
  db.run(dropBikeMakeTableQuery, error => {
    if (error) console.error("Error dropping 'bike_make' table");
    else console.log("Dropped 'bike_make' table");
  })

  const createBikeMakeTableQuery =
    'CREATE TABLE bike_make (brand TEXT, type TEXT, category TEXT)'
  db.run(createBikeMakeTableQuery, error => {
    if (error) console.error("Error creating 'bike_make' table");
    else console.log("Created 'bike_make' table");
  })

  const insertBikeMakeQuery = 'INSERT INTO bike_make VALUES (?, ?, ?)';
  for (let bikemake of bikes_make_list) {
    let bikeMakeData = [bikemake.brand, bikemake.type, bikemake.category];
    db.run(insertBikeMakeQuery, bikeMakeData, error => {
      if (error) console.log("Could not insert into bike_make table", [bikemake.brand, bikemake.type, bikemake.category], error);
      else console.log(`Inserted bike into bike_make table`);
    })
  }
//                                            ************* Drop, Create, Insert bike_details Table *************

  // Drop, Create, Insert Bike Details table
  const dropBikeDetailsTableQuery = 'DROP TABLE IF EXISTS bike_details';
  db.run(dropBikeDetailsTableQuery, error => {
    if (error) console.error("Error dropping 'bike_details' table");
    else console.log("Dropped 'bike_details' table");
  })

  const createBikeDetailsTableQuery =
    'CREATE TABLE bike_details (brand INTEGER, size TEXT, color TEXT, material TEXT, serial_number INTEGER, component TEXT)';
  db.run(createBikeDetailsTableQuery, error => {
    if (error) console.error("Error creating 'bike_details' table");
    else console.log("Created 'bike_details' table");
  })

  const insertBikeDetailsQuery = 'INSERT INTO bike_details VALUES (?, ?, ?, ?, ?, ?)';
  for (let bikedetail of bike_details_list) {
    let bikeDetailData = [bikedetail.brand, bikedetail.size, bikedetail.color, bikedetail.material, bikedetail.serial_number, bikedetail.component];
    db.run(insertBikeDetailsQuery, bikeDetailData, error => {
      if (error) console.log("Could not insert into bike_details table", [bikedetail.brand, bikedetail.size, bikedetail.color, bikedetail.material, bikedetail.serial_number, bikedetail.component], error);
      else console.log(`Inserted bike into bike_details table`);
    })
  }
  //                                               ************* Drop, Create, Insert orders Table *************

  // JOIN TABLES: ORDERS TABLE
  const dropOrdersTableQuery = 'DROP TABLE IF EXISTS orders';
  db.run(dropOrdersTableQuery, error => {
    if (error) console.log("Error dropping 'orders' table");
    else console.log("Dropped 'orders' table");
  })

  const createOrdersTableQuery = 'CREATE TABLE orders (users_id INTEGER, bikespec_id INTEGER)';
  db.run(createOrdersTableQuery, error => {
    if (error) console.error("Error creating 'orders' table");
    else console.log("Create 'orders' table");
  })
})
