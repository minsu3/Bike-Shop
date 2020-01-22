const db = require('./database.js');

const users = [
  {
    first_name: "Minsu",
    last_name: "Kim",
    email: "kim97minsu@gmail.com",
    street_number: "999",
    street_name: "Pawnee Dr.",
    city: "Pawnee",
    state: "Illinois",
    zip_code: "12345",
    phone_number: "0123456789",
    registration_date: "2019-01-01"
  }
];

const specialized = [
  {
    brand: "Specialized"
  }
]

const trek = [
  {
    brand: "Trek"
  }
]

const cannondale = [
  {
    brand: "Cannondale"
  }
]

const specialized_bikes = [
  {
    brand_name: specialized[0].brand,
    name: "Venge",
    type: "Road",
    category: "Aero",
    size: "Medium",
    color: "Matte Black",
    material: "Carbon Fiber",
    component: "Shimano"
  },
  {
    brand_name: specialized[0].brand,
    name: "Stumpjumper",
    type: "Mountain",
    category: "Trail",
    size: "Small",
    color: "Dark Grap",
    material: "Carbon Fiber",
    component: "Campagnolo"
  },
  {
    brand_name: specialized[0].brand,
    name: "Shiv",
    type: "Triathlon",
    category: "Aero",
    size: "Large",
    color: "Sunset Five-O/Gloss White",
    material: "Titanium",
    component: "Sram"
  }
]

const trek_bikes = [
  {
    brand_name: trek[0].brand,
    name: "Domane",
    type: "Road",
    category: "Endurance",
    size: "Medium",
    color: "Red",
    material: "Carbon Fiber",
    component: "Shimano"
  },
  {
    brand_name: trek[0].brand,
    name: "Supercaliber",
    type: "Mountain",
    category: "Downhill",
    size: "Large",
    color: "Black",
    material: "Carbon Fiber",
    component: "Shimano"
  },
  {
    brand_name: trek[0].brand,
    name: "Boone",
    type: "Cyclocross",
    category: "Endurance",
    size: "Small",
    color: "Pink",
    material: "Carbon Fiber",
    component: "Shimano"
  }
]

const cannondale_bikes = [
  {
    brand_name: cannondale[0].brand,
    name: "SuperSix Evo",
    type: "Road",
    category: "Lightweight",
    size: "Small",
    color: "Green",
    material: "Carbon Fiber",
    component: "Shimano"
  },
  {
    brand_name: cannondale[0].brand,
    name: "Bad Habit",
    type: "Mountain",
    category: "Trail",
    size: "Medium",
    color: "Blue",
    material: "Carbon Fiber",
    component: "Sram"
  },
  {
    brand_name: cannondale[0].brand,
    name: "Caad-12",
    type: "Road",
    category: "Aero",
    size: "Large",
    color: "Blue",
    material: "Aluminum",
    component: "Shimano"
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

  // Drop, Create, Insert specialized 
  const dropSpecializedTableQuery = 'DROP TABLE IF EXISTS specialized';
  db.run(dropSpecializedTableQuery, error=> {
    if(error) console.error("Error dropping 'specialized' table");
    else console.log("Dropped 'specialized' table");
  })

  const createSpecializedTableQuery = 
    'CREATE TABLE specialized (brand TEXT)'
    db.run(createSpecializedTableQuery, error=> {
      if (error) console.error("Error creating 'specialized' table");
      else console.log("Created 'specialized' table");
    })

  const insertSpecializedQuery = 'INSERT INTO specialized VALUES (?)';
  for (let bikemake of specialized) {
    let bikeMakeData = [bikemake.brand];
    db.run(insertSpecializedQuery, bikeMakeData, error=> {
      if (error) console.log("Could not insert into specialized table", [bikemake.brand], error);
      else console.log(`Inserted brand into specialized table`);
    })
  }


  // Drop, Create, Insert trek 
  const dropTrekTableQuery = 'DROP TABLE IF EXISTS trek';
  db.run(dropTrekTableQuery, error => {
    if (error) console.error("Error dropping 'trek' table");
    else console.log("Dropped 'trek' table");
  })

  const createTrekTableQuery =
    'CREATE TABLE trek (brand TEXT)'
  db.run(createTrekTableQuery, error => {
    if (error) console.error("Error creating 'trek' table");
    else console.log("Created 'trek' table");
  })

  const insertTrekQuery = 'INSERT INTO trek VALUES (?)';
  for (let bikemake of trek) {
    let bikeMakeData = [bikemake.brand];
    db.run(insertTrekQuery, bikeMakeData, error => {
      if (error) console.log("Could not insert into trek table", [bikemake.brand], error);
      else console.log(`Inserted brand into trek table`);
    })
  }


  // Drop, Create, Insert cannondale 
  const dropCannondaleTableQuery = 'DROP TABLE IF EXISTS cannondale';
  db.run(dropCannondaleTableQuery, error => {
    if (error) console.error("Error dropping 'cannondale' table");
    else console.log("Dropped 'cannondale' table");
  })

  const createCannondaleTableQuery =
    'CREATE TABLE cannondale (brand TEXT)'
  db.run(createCannondaleTableQuery, error => {
    if (error) console.error("Error creating 'cannondale' table");
    else console.log("Created 'cannondale' table");
  })

  const insertCannondaleQuery = 'INSERT INTO cannondale VALUES (?)';
  for (let bikemake of cannondale) {
    let bikeMakeData = [bikemake.brand];
    db.run(insertCannondaleQuery, bikeMakeData, error => {
      if (error) console.log("Could not insert into cannondale table", [bikemake.brand], error);
      else console.log(`Inserted brand into cannondale table`);
    })
  }
  

  // Drop, Create, Insert specialized_bikes table
  const dropBikeSpecializedBikesTableQuery = 'DROP TABLE IF EXISTS specialized_bikes';
  db.run(dropBikeSpecializedBikesTableQuery, error=> {
    if (error) console.error("Error dropping 'specialized_bikes' table");
    else console.log("Dropped 'specialized_bikes' table");
  })

  const createSpecializedBikesTableQuery = 
    'CREATE TABLE specialized_bikes (brand_name TEXT, name TEXT, type TEXT, category TEXT, size TEXT, color TEXT, material TEXT, component TEXT)';
  db.run(createSpecializedBikesTableQuery, error=> {
      if (error) console.error("Error creating 'specialized_bikes' table");
      else console.log("Created 'specialized_bikes' table");
    })

  const insertSpecializedBikesQuery = 'INSERT INTO specialized_bikes VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  for (let bikespec of specialized_bikes) {
    let bikeSpecData = [
      bikespec.brand_name,
      bikespec.name,
      bikespec.type,
      bikespec.category,
      bikespec.size,
      bikespec.color,
      bikespec.material,
      bikespec.component
    ];
    db.run(insertSpecializedBikesQuery, bikeSpecData, error=> {
      if (error) console.log(
        "Could not insert into specialized_bikes table", [bikespec.brand_name, bikespec.name, bikespec.type, bikespec.category, bikespec.size, bikespec.color, bikespec.material, bikespec.component], error);
      else console.log(`Inserted bike into specialized_bikes table`);
    })
  }


  // Drop, Create, Insert trek_bikes table
  const dropBikeTrekBikesTableQuery = 'DROP TABLE IF EXISTS trek_bikes';
  db.run(dropBikeTrekBikesTableQuery, error => {
    if (error) console.error("Error dropping 'trek_bikes' table");
    else console.log("Dropped 'trek_bikes' table");
  })

  const createTrekBikesTableQuery =
    'CREATE TABLE trek_bikes (brand_name TEXT, name TEXT, type TEXT, category TEXT, size TEXT, color TEXT, material TEXT, component TEXT)';
  db.run(createTrekBikesTableQuery, error => {
    if (error) console.error("Error creating 'trek_bikes' table");
    else console.log("Created 'trek_bikes' table");
  })

  const insertTrekBikesQuery = 'INSERT INTO trek_bikes VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  for (let bikespec of trek_bikes) {
    let bikeSpecData = [
      bikespec.brand_name,
      bikespec.name,
      bikespec.type,
      bikespec.category,
      bikespec.size,
      bikespec.color,
      bikespec.material,
      bikespec.component
    ];
    db.run(insertTrekBikesQuery, bikeSpecData, error => {
      if (error) console.log(
        "Could not insert into trek_bikes table", [bikespec.brand_name, bikespec.name, bikespec.type, bikespec.category, bikespec.size, bikespec.color, bikespec.material, bikespec.component], error);
      else console.log(`Inserted bike into trek_bikes table`);
    })
  }


  // Drop, Create, Insert cannondale_bikes table
  const dropBikeCannondaleBikesTableQuery = 'DROP TABLE IF EXISTS cannondale_bikes';
  db.run(dropBikeCannondaleBikesTableQuery, error => {
    if (error) console.error("Error dropping 'cannondale_bikes' table");
    else console.log("Dropped 'cannondale_bikes' table");
  })

  const createCannondaleBikesTableQuery =
    'CREATE TABLE cannondale_bikes (brand_name TEXT, name TEXT, type TEXT, category TEXT, size TEXT, color TEXT, material TEXT, component TEXT)';
  db.run(createCannondaleBikesTableQuery, error => {
    if (error) console.error("Error creating 'cannondale_bikes' table");
    else console.log("Created 'cannondale_bikes' table");
  })

  const insertCannondaleBikesQuery = 'INSERT INTO cannondale_bikes VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  for (let bikespec of cannondale_bikes) {
    let bikeSpecData = [
      bikespec.brand_name,
      bikespec.name,
      bikespec.type,
      bikespec.category,
      bikespec.size,
      bikespec.color,
      bikespec.material,
      bikespec.component
    ];
    db.run(insertCannondaleBikesQuery, bikeSpecData, error => {
      if (error) console.log(
        "Could not insert into cannondale_bikes table", [bikespec.brand_name, bikespec.name, bikespec.type, bikespec.category, bikespec.size, bikespec.color, bikespec.material, bikespec.component], error);
      else console.log(`Inserted bike into cannondale_bikes table`);
    })
  }


  // JOIN TABLES: ORDERS TABLE
  const dropOrdersTableQuery = 'DROP TABLE IF EXISTS orders';
  db.run(dropOrdersTableQuery, error=> {
    if(error) console.log("Error dropping 'orders' table");
    else console.log("Dropped 'orders' table");
  })

  const createOrdersTableQuery = 'CREATE TABLE orders (users_id INTEGER, bikespec_id INTEGER)';
  db.run(createOrdersTableQuery, error=> {
    if(error) console.error("Error creating 'orders' table");
    else console.log("Create 'orders' table");
  })

})