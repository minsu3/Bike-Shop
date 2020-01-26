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
    phone_number: "9255963678",
    registration_date: "2019-01-01"
  },
  {
    first_name: "Dann",
    last_name: "Manganti",
    email: "dann@gmail.com",
    street_number: "111",
    street_name: "Dann Dr.",
    city: "Dann",
    state: "SF",
    zip_code: "12346",
    phone_number: "0123456789",
    registration_date: "2019-02-02"
  }
];

const bikes_make_list = [
  {
    brand: "Brand",
    type: "Type",
    category: "Category"
  },
  {
    brand: "Second Brand",
    type: "Second Type",
    category: "Second Category"
  }
]

const bike_details_list = [
  {
    brand_id: "1",
    size: "Medium",
    color: "Blue",
    material: "Aluminum",
    serial_number: "12345",
    component: "Shimano"
  },
  {
    brand_id: "2",
    size: "Large",
    color: "Red",
    material: "Aluminum",
    serial_number: "12345",
    component: "Campagnolo"
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
    'CREATE TABLE bike_details (brand_id INTEGER, size TEXT, color TEXT, material TEXT, serial_number INTEGER, component TEXT)';
  db.run(createBikeDetailsTableQuery, error => {
    if (error) console.error("Error creating 'bike_details' table");
    else console.log("Created 'bike_details' table");
  })

  const insertBikeDetailsQuery = 'INSERT INTO bike_details VALUES (?, ?, ?, ?, ?, ?)';
  for (let bikedetail of bike_details_list) {
    let bikeDetailData = [bikedetail.brand_id, bikedetail.size, bikedetail.color, bikedetail.material, bikedetail.serial_number, bikedetail.component];
    db.run(insertBikeDetailsQuery, bikeDetailData, error => {
      if (error) console.log("Could not insert into bike_details table", [bikedetail.brand_id, bikedetail.size, bikedetail.color, bikedetail.material, bikedetail.serial_number, bikedetail.component], error);
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


//                                     ************** for presentation *************** 
// const specialized = [
//   {
//     brand: "Specialized"
//   }
// ]
// const trek = [
//   {
//     brand: "Trek"
//   }
// ]
// const cannondale = [
//   {
//     brand: "Cannondale"
//   }
// ]
// const specialized_bikes = [
//   {
//     brand_name: specialized[0].brand,
//     name: "Venge",
//     type: "Road",
//     category: "Aero",
//     size: "Medium",
//     color: "Matte Black",
//     material: "Carbon Fiber",
//     component: "Shimano"
//   },
//   {
//     brand_name: specialized[0].brand,
//     name: "Stumpjumper",
//     type: "Mountain",
//     category: "Trail",
//     size: "Small",
//     color: "Dark Grap",
//     material: "Carbon Fiber",
//     component: "Campagnolo"
//   },
//   {
//     brand_name: specialized[0].brand,
//     name: "Shiv",
//     type: "Triathlon",
//     category: "Aero",
//     size: "Large",
//     color: "Sunset Five-O/Gloss White",
//     material: "Titanium",
//     component: "Sram"
//   }
// ]
// const trek_bikes = [
//   {
//     brand_name: trek[0].brand,
//     name: "Domane",
//     type: "Road",
//     category: "Endurance",
//     size: "Medium",
//     color: "Red",
//     material: "Carbon Fiber",
//     component: "Shimano"
//   },
//   {
//     brand_name: trek[0].brand,
//     name: "Supercaliber",
//     type: "Mountain",
//     category: "Downhill",
//     size: "Large",
//     color: "Black",
//     material: "Carbon Fiber",
//     component: "Shimano"
//   },
//   {
//     brand_name: trek[0].brand,
//     name: "Boone",
//     type: "Cyclocross",
//     category: "Endurance",
//     size: "Small",
//     color: "Pink",
//     material: "Carbon Fiber",
//     component: "Shimano"
//   }
// ]
// const cannondale_bikes = [
//   {
//     brand_name: cannondale[0].brand,
//     name: "SuperSix Evo",
//     type: "Road",
//     category: "Lightweight",
//     size: "Small",
//     color: "Green",
//     material: "Carbon Fiber",
//     component: "Shimano"
//   },
//   {
//     brand_name: cannondale[0].brand,
//     name: "Bad Habit",
//     type: "Mountain",
//     category: "Trail",
//     size: "Medium",
//     color: "Blue",
//     material: "Carbon Fiber",
//     component: "Sram"
//   },
//   {
//     brand_name: cannondale[0].brand,
//     name: "Caad-12",
//     type: "Road",
//     category: "Aero",
//     size: "Large",
//     color: "Blue",
//     material: "Aluminum",
//     component: "Shimano"
//   }
// ]
//                               *********** THIS WILL BE JUST FOR THE PRESENTATION AND NOT FOR THE FINISHED PRODUCT **************

  // Drop, Create, Insert specialized 
  // const dropSpecializedTableQuery = 'DROP TABLE IF EXISTS specialized';
  // db.run(dropSpecializedTableQuery, error=> {
  //   if(error) console.error("Error dropping 'specialized' table");
  //   else console.log("Dropped 'specialized' table");
  // })

  // const createSpecializedTableQuery = 
  //   'CREATE TABLE specialized (brand TEXT)'
  //   db.run(createSpecializedTableQuery, error=> {
  //     if (error) console.error("Error creating 'specialized' table");
  //     else console.log("Created 'specialized' table");
  //   })

  // const insertSpecializedQuery = 'INSERT INTO specialized VALUES (?)';
  // for (let bikemake of specialized) {
  //   let bikeMakeData = [bikemake.brand];
  //   db.run(insertSpecializedQuery, bikeMakeData, error=> {
  //     if (error) console.log("Could not insert into specialized table", [bikemake.brand], error);
  //     else console.log(`Inserted brand into specialized table`);
  //   })
  // }

  // // Drop, Create, Insert trek 
  // const dropTrekTableQuery = 'DROP TABLE IF EXISTS trek';
  // db.run(dropTrekTableQuery, error => {
  //   if (error) console.error("Error dropping 'trek' table");
  //   else console.log("Dropped 'trek' table");
  // })

  // const createTrekTableQuery =
  //   'CREATE TABLE trek (brand TEXT)'
  // db.run(createTrekTableQuery, error => {
  //   if (error) console.error("Error creating 'trek' table");
  //   else console.log("Created 'trek' table");
  // })

  // const insertTrekQuery = 'INSERT INTO trek VALUES (?)';
  // for (let bikemake of trek) {
  //   let bikeMakeData = [bikemake.brand];
  //   db.run(insertTrekQuery, bikeMakeData, error => {
  //     if (error) console.log("Could not insert into trek table", [bikemake.brand], error);
  //     else console.log(`Inserted brand into trek table`);
  //   })
  // }

  // // Drop, Create, Insert cannondale 
  // const dropCannondaleTableQuery = 'DROP TABLE IF EXISTS cannondale';
  // db.run(dropCannondaleTableQuery, error => {
  //   if (error) console.error("Error dropping 'cannondale' table");
  //   else console.log("Dropped 'cannondale' table");
  // })

  // const createCannondaleTableQuery =
  //   'CREATE TABLE cannondale (brand TEXT)'
  // db.run(createCannondaleTableQuery, error => {
  //   if (error) console.error("Error creating 'cannondale' table");
  //   else console.log("Created 'cannondale' table");
  // })

  // const insertCannondaleQuery = 'INSERT INTO cannondale VALUES (?)';
  // for (let bikemake of cannondale) {
  //   let bikeMakeData = [bikemake.brand];
  //   db.run(insertCannondaleQuery, bikeMakeData, error => {
  //     if (error) console.log("Could not insert into cannondale table", [bikemake.brand], error);
  //     else console.log(`Inserted brand into cannondale table`);
  //   })
  // }
  
  // // Drop, Create, Insert specialized_bikes table
  // const dropBikeSpecializedBikesTableQuery = 'DROP TABLE IF EXISTS specialized_bikes';
  // db.run(dropBikeSpecializedBikesTableQuery, error=> {
  //   if (error) console.error("Error dropping 'specialized_bikes' table");
  //   else console.log("Dropped 'specialized_bikes' table");
  // })

  // const createSpecializedBikesTableQuery = 
  //   'CREATE TABLE specialized_bikes (brand_name TEXT, name TEXT, type TEXT, category TEXT, size TEXT, color TEXT, material TEXT, component TEXT)';
  // db.run(createSpecializedBikesTableQuery, error=> {
  //     if (error) console.error("Error creating 'specialized_bikes' table");
  //     else console.log("Created 'specialized_bikes' table");
  //   })

  // const insertSpecializedBikesQuery = 'INSERT INTO specialized_bikes VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  // for (let bikedetail of specialized_bikes) {
  //   let bikeSpecData = [
  //     bikedetail.brand_name,
  //     bikedetail.name,
  //     bikedetail.type,
  //     bikedetail.category,
  //     bikedetail.size,
  //     bikedetail.color,
  //     bikedetail.material,
  //     bikedetail.component
  //   ];
  //   db.run(insertSpecializedBikesQuery, bikeSpecData, error=> {
  //     if (error) console.log(
  //       "Could not insert into specialized_bikes table", [bikedetail.brand_name, bikedetail.name, bikedetail.type, bikedetail.category, bikedetail.size, bikedetail.color, bikedetail.material, bikedetail.component], error);
  //     else console.log(`Inserted bike into specialized_bikes table`);
  //   })
  // }

  // // Drop, Create, Insert trek_bikes table
  // const dropBikeTrekBikesTableQuery = 'DROP TABLE IF EXISTS trek_bikes';
  // db.run(dropBikeTrekBikesTableQuery, error => {
  //   if (error) console.error("Error dropping 'trek_bikes' table");
  //   else console.log("Dropped 'trek_bikes' table");
  // })

  // const createTrekBikesTableQuery =
  //   'CREATE TABLE trek_bikes (brand_name TEXT, name TEXT, type TEXT, category TEXT, size TEXT, color TEXT, material TEXT, component TEXT)';
  // db.run(createTrekBikesTableQuery, error => {
  //   if (error) console.error("Error creating 'trek_bikes' table");
  //   else console.log("Created 'trek_bikes' table");
  // })

  // const insertTrekBikesQuery = 'INSERT INTO trek_bikes VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  // for (let bikedetail of trek_bikes) {
  //   let bikeSpecData = [
  //     bikedetail.brand_name,
  //     bikedetail.name,
  //     bikedetail.type,
  //     bikedetail.category,
  //     bikedetail.size,
  //     bikedetail.color,
  //     bikedetail.material,
  //     bikedetail.component
  //   ];
  //   db.run(insertTrekBikesQuery, bikeSpecData, error => {
  //     if (error) console.log(
  //       "Could not insert into trek_bikes table", [bikedetail.brand_name, bikedetail.name, bikedetail.type, bikedetail.category, bikedetail.size, bikedetail.color, bikedetail.material, bikedetail.component], error);
  //     else console.log(`Inserted bike into trek_bikes table`);
  //   })
  // }

  // // Drop, Create, Insert cannondale_bikes table
  // const dropBikeCannondaleBikesTableQuery = 'DROP TABLE IF EXISTS cannondale_bikes';
  // db.run(dropBikeCannondaleBikesTableQuery, error => {
  //   if (error) console.error("Error dropping 'cannondale_bikes' table");
  //   else console.log("Dropped 'cannondale_bikes' table");
  // })

  // const createCannondaleBikesTableQuery =
  //   'CREATE TABLE cannondale_bikes (brand_name TEXT, name TEXT, type TEXT, category TEXT, size TEXT, color TEXT, material TEXT, component TEXT)';
  // db.run(createCannondaleBikesTableQuery, error => {
  //   if (error) console.error("Error creating 'cannondale_bikes' table");
  //   else console.log("Created 'cannondale_bikes' table");
  // })

  // const insertCannondaleBikesQuery = 'INSERT INTO cannondale_bikes VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  // for (let bikedetail of cannondale_bikes) {
  //   let bikeSpecData = [
  //     bikedetail.brand_name,
  //     bikedetail.name,
  //     bikedetail.type,
  //     bikedetail.category,
  //     bikedetail.size,
  //     bikedetail.color,
  //     bikedetail.material,
  //     bikedetail.component
  //   ];
  //   db.run(insertCannondaleBikesQuery, bikeSpecData, error => {
  //     if (error) console.log(
  //       "Could not insert into cannondale_bikes table", [bikedetail.brand_name, bikedetail.name, bikedetail.type, bikedetail.category, bikedetail.size, bikedetail.color, bikedetail.material, bikedetail.component], error);
  //     else console.log(`Inserted bike into cannondale_bikes table`);
  //   })
  // }