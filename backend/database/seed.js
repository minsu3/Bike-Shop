const db = require('./database.js');

// seed data
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
    brand: "Specialized",
    type: "road",
    category: "aero"
  },
  {
    brand: "Trek",
    type: "mountain",
    category: "enduro"
  },
  {
    brand: "Cannondale",
    type: "road",
    category: "lightweight"
  }
]

const bike_details_list = [
  {
    brand: "Specialized",
    bike_name: "Venge",
    image: "https://i.imgur.com/xhq3E9Y.png",
    price: 8000,
    size: "Medium",
    color: "Black",
    material: "Carbon Fiber",
    serial_number: "10000",
    component: "Shimano"
  },
  {
    brand: "Specialized",
    bike_name: "Shiv",
    image: "https://i.imgur.com/J3IyGKd.png",
    price: 12000,
    size: "Large",
    color: "Blue",
    material: "Carbon Fiber",
    serial_number: "10001",
    component: "Shimano"
  },
  {
    brand: "Specialized",
    bike_name: "Stumpjumper",
    image: "https://i.imgur.com/Zi4v8SE.png",
    price: 5000,
    size: "Small",
    color: "Black",
    material: "Carbon Fiber",
    serial_number: "10002",
    component: "Campagnolo"
  },
  {
    brand: "Trek",
    bike_name: "Domane",
    image: "https://i.imgur.com/aCzl3Se.png",
    price: 9000,
    size: "Large",
    color: "Red",
    material: "Carbon Fiber",
    serial_number: "10003",
    component: "Sram Red"
  },
  {
    brand: "Trek",
    bike_name: "Boone",
    image: "https://i.imgur.com/iIArysz.png",
    price: 3000,
    size: "Small",
    color: "Dark Red",
    material: "Carbon Fiber",
    serial_number: "10004",
    component: "Campagnolo"
  },
  {
    brand: "Trek",
    bike_name: "Super Caliber",
    image: "https://i.imgur.com/5fb9qa0.png",
    price: 2000,
    size: "Large",
    color: "Black",
    material: "Carbon Fiber",
    serial_number: "10005",
    component: "Campagnolo"
  },
  {
    brand: "Cannondale",
    bike_name: "Caad 12",
    image: "https://i.imgur.com/MOxZA2X.png",
    price: 1000,
    size: "Medium",
    color: "Light Blue",
    material: "Aluminum",
    serial_number: "10006",
    component: "Shimano"
  },
  {
    brand: "Cannondale",
    bike_name: "Super Six Evo",
    image: "https://i.imgur.com/x3kztyY.png",
    price: 7000,
    size: "Large",
    color: "Black and Orange",
    material: "Carbon Fiber",
    serial_number: "10007",
    component: "Shimano"
  },
  {
    brand: "Cannondale",
    bike_name: "Bad Habit",
    image: "https://i.imgur.com/PT0vt1x.png",
    price: 6000,
    size: "Small",
    color: "Black",
    material: "Carbon Fiber",
    serial_number: "10008",
    component: "Campagnolo"
  }
]

// join tables will be created in seed file


// Create a synschronous database function
db.serialize(() => {

  // Drop, Create, Insert users Table
  const dropUsersTableQuery = 'DROP TABLE IF EXISTS users';
  db.run(dropUsersTableQuery, error=> {
    if(error) console.error("Error dropping 'users' table");
    else console.log("Dropped 'users' table");
  })

  const createUsersTableQuery = 
    'CREATE TABLE users (first_name TEXT, last_name TEXT, email TEXT, street_number INTEGER, street_name TEXT, city TEXT, state TEXT, zip_code INTEGER, phone_number INTEGER, registration_date DATE)'
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

  // Drop, Create, Insert Bike Details table
  const dropBikeDetailsTableQuery = 'DROP TABLE IF EXISTS bike_details';
  db.run(dropBikeDetailsTableQuery, error => {
    if (error) console.error("Error dropping 'bike_details' table");
    else console.log("Dropped 'bike_details' table");
  })

  const createBikeDetailsTableQuery =
    'CREATE TABLE bike_details (brand INTEGER, bike_name TEXT, image TEXT, price INTEGER, size TEXT, color TEXT, material TEXT, serial_number INTEGER, component TEXT)';
  db.run(createBikeDetailsTableQuery, error => {
    if (error) console.error("Error creating 'bike_details' table");
    else console.log("Created 'bike_details' table");
  })

  const insertBikeDetailsQuery = 'INSERT INTO bike_details VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  for (let bikedetail of bike_details_list) {
    let bikeDetailData = [bikedetail.brand, bikedetail.bike_name, bikedetail.image, bikedetail.price, bikedetail.size, bikedetail.color, bikedetail.material, bikedetail.serial_number, bikedetail.component];
    db.run(insertBikeDetailsQuery, bikeDetailData, error => {
      if (error) console.log("Could not insert into bike_details table", [bikedetail.brand, bikedetail.bike_name, bikedetail.image, bikedetail.price, bikedetail.size, bikedetail.color, bikedetail.material, bikedetail.serial_number, bikedetail.component], error);
      else console.log(`Inserted bike into bike_details table`);
    })
  }

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
