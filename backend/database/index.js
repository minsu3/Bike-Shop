let express = require("express");
let db = require("./database.js");
let app = express();

// Middleware
app.use(express.json());

const port = 9000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("");
});

// Get all users
app.get("/api/users", (req, res) => {
  const getAllUsers = "SELECT * users.oid FROM users";

  db.all(getAllUsers, (error, results) => {
    if (error) {
      console.log("Get all users table failed", error);
      res.sendStatus(500);
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });
});

app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const getOneUser = `SELECT * FROM users WHERE users.oid =?`;

  db.all(getOneUser, [userId], (error, results) => {
    if (error) {
      console.log("Failed to retrieve a user from table", error);
      res.sendStatus(500);
    } else {
      console.log("Got this user: ", results);
      res.status(200).json(results);
    }
  });
});

app.post("/api/users", (req, res) => {
  const reqBody = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.street_number,
    req.body.street_name,
    req.body.city,
    req.body.state,
    req.body.zip_code,
    req.body.phone_number,
    req.body.registration_date
  ];
  const insertNewUser =
    "INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.run(insertNewUser, reqBody, function(error) {
    if (error) {
      console.log(
        `Failed to create new user with name ${req.body.first_name} ${req.body.last_name}.`
      );
      res.sendStatus(500);
    } else {
      console.log(
        `Successfully added new user ${req.body.first_name} ${req.body.last_name}.`
      );
      res.sendStatus(200);
    }
  });
});

// Update a user
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updateOneUser = `
    UPDATE users SET 
      FIRST_NAME = ?, 
      LAST_NAME = ?, 
      STREET_NUMBER = ?, 
      STREET_NAME = ?, 
      CITY = ?, 
      STATE = ?, 
      ZIP_CODE = ?, 
      PHONE_NUMBER = ?, 
      REGISTRATION_DATE = ? 
    WHERE users.oid = ${userId}`;

  db.run(
    updateOneUser,
    [
      req.body.first_name,
      req.body.last_name,
      req.body.street_number,
      req.body.street_name,
      req.body.city,
      req.body.state,
      req.body.zip_code,
      req.body.phone_number,
      req.body.registration_date
    ],
    error => {
      if (error) {
        console.log(
          `Failed to update a user named ${req.body.first_name} ${req.body.last_name}.`,
          error
        );
        res.sendStatus(500);
      } else {
        console.log(
          `User named ${req.body.first_name} ${req.body.last_name} was updated successfully.`
        );
        res.sendStatus(200);
      }
    }
  );
});

app.delete("/api/users/:id", (req, res) => {
  const userId = [req.params.id];
  const deleteUser = `DELETE FROM users WHERE ? = users.oid`;
  // const deleteUserOrder = `DELETE FROM orders WHERE ? = orders.user_id`;

  db.run(deleteUser, userId, error => {
    if (error) {
      console.log(`Failed to delete from user with id of ${userId} failed.`);
    } else {
      console.log(`Successfully deted from customer with id of ${userId}.`);
    }
  });
  // db.run(deleteUserOrder, userId, error => {
  //   if(error) {
  //     res.sendStatus(500);
  //   } else {
  //     console.log(`Delete from orders with user id of ${userId} succeeded`);
  //     res.sendStatus(200);
  //   }
  // })
});

//                                                          ************* BIKE MAKE *************

// GET all bike makes 
app.get("/api/bike_make", (req, res) => {
  const getAllBikeMakes = "SELECT * FROM bike_make";

  db.all(getAllBikeMakes, (error, results) => {
    if (error) {
      console.log("Get all bike makes table failed.", error);
      res.sendStatus(500);
    } else res.status(200).json(results);
  });
});

// GET one bike make 
app.get("/api/bike_make/:id", (req, res) => {
  const makeId = req.params.id;
  const getOneMake = `SELECT * FROM bike_make WHERE bike_make.oid = ?`;

  db.all(getOneMake, [makeId], (error, results) => {
    if (error) {
      console.log("Failed to retrieve a bike make from table.", error);
      res.sendStatus(500);
    } else res.status(200).json(results);
  });
});

// CREATE (add) one bike make 
app.post("/api/bike_make", (req, res) => {
  console.log("HELLO WORLD")
  const reqBody = [req.body.brand, req.body.type, req.body.category];
  const insertNewMake = "INSERT INTO bike_make VALUES (?, ?, ?)";

  db.run(insertNewMake, reqBody, error => {
    if (error) {
      console.log(
        `Failed to create bike make: ${req.body.brand}.`
      );
      res.sendStatus(500);
    } else {
      console.log(
        `Successfully created bike make ${req.body.brand}.`
      );
      res.sendStatus(200);
    }
  });
});

// UPDATE one bike make
app.put("/api/bike_make/:id", (req, res) => {
  const makeId = req.params.id;
  const reqBody = [req.body.brand, req.body.type, req.body.category];
  const updateMake = `
    UPDATE bike_make SET 
      BRAND = ?,
      TYPE = ?,
      CATEGORY = ?
    WHERE bike_make.oid = ${makeId}`;

  db.run(updateMake, reqBody, error => {
    if (error) {
      console.log(`Failed to update bike make.`, error);
      res.sendStatus(500);
    } else {
      console.log(`Successfully updated bike make.`);
      res.sendStatus(200);
    }
  }
  );
});

// DELETE one bike make
app.delete("/api/bike_make/:id", (req, res) => {
  const makeId = [req.params.id];
  const deleteMake = `DELETE FROM bike_make WHERE ? = bike_make.oid`;

  db.run(deleteMake, makeId, error => {
    if (error) {
      console.log(`Failed to delete from make with id of ${makeId}.`);
      res.sendStatus(500);
    } else {
      console.log(`Successfully deleted make with id of ${makeId}.`);
      res.sendStatus(200);
    }
  });
});


//                                                          ************* BIKE DETAILS *************

// GET all bike details 
app.get("/api/bikedetails", (req, res) => {
  const getAllBikeDetails = "SELECT * FROM bike_details";

  db.all(getAllBikeDetails, (error, results) => {
    if (error) {
      console.log("Get all bike details table failed.", error);
      res.sendStatus(500);
    } else res.status(200).json(results);
  });
});

// GET one bike detail
app.get("/api/bikedetails/:id", (req, res) => {
  const detailId = req.params.id;
  const getOneDetail = `SELECT * FROM bike_details WHERE bike_details.oid = ?`;

  db.all(getOneDetail, [detailId], (error, results) => {
    if (error) {
      console.log("Failed to retrieve single bike detail from table.", error);
      res.sendStatus(500);
    } else res.status(200).json(results);
  });
});

app.post("/api/bikedetails", (req, res) => {
  const reqBody = [
    req.body.brand,
    req.body.size,
    req.body.color,
    req.body.material,
    req.body.serial_number,
    req.body.component,
  ];
  const insertNewDetail = "INSERT INTO bike_details VALUES (?, ?, ?, ?, ?, ?)";

  db.run(insertNewDetail, reqBody, error => {
    if (error) {
      console.log(`Failed to create a bike detail.`);
      res.sendStatus(500);
    } else {
      console.log(`Successfully created a bike detail.`);
      res.sendStatus(200);
    }
  });
});

// UPDATE one bike detail
app.put("/api/bikedetails/:id", (req, res) => {
  const detailId = req.params.id;
  const updateDetail = `
    UPDATE bike_details SET 
      BRAND = ?,
      SIZE = ?,
      COLOR = ?,
      MATERIAL = ?,
      SERIAL_NUMBER = ?,
      COMPONENT = ?
    WHERE bike_details.oid = ${detailId}`;

  db.run(
    updateDetail,
    [
      req.body.brand,
      req.body.size,
      req.body.color,
      req.body.material,
      req.body.serial_number,
      req.body.component
    ],
    error => {
      if (error) {
        console.log(`Failed to update bike detail.`, error);
        res.sendStatus(500);
      } else {
        console.log(`Successfully updated bike detail.`);
        res.sendStatus(200);
      }
    }
  );
});

// DELETE one bike detail
app.delete("/api/bikedetails/:id", (req, res) => {
  const detailId = [req.params.id];
  const deleteDetail = `DELETE FROM bike_details WHERE ? = bike_details.oid`;

  db.run(deleteDetail, detailId, error => {
    if (error) {
      console.log(`Failed to delete a bike detail with id of ${detailId}.`);
      res.sendStatus(500);
    } else {
      console.log(`Successfully deleted a bike detail with id of ${detailId}.`);
      res.sendStatus(200);
    }
  });
});

//                                                     ************* ORDER (join table) *************

app.get("/api/orders", (req, res) => {
  const queryString = `SELECT * FROM orders`;

  db.all(queryString, (error, results) => {
    if (error) {
      console.log(`Failed to retrieve all orders from orders table.`);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/api/users/:id/bikedetails", (req, res) => {
  const queryString = `SELECT * FROM orders`;

  db.all(queryString, (error, results) => {
    if (error) {
      console.log(`Failed to retrieve all order from orders table.`);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/api/users/:id/bikedetails/:detailId", (req, res) => {
  const reqParams = [req.params.id, req.params.specId];
  const insertString = "INSERT INTO orders VALUES (?, ?)";

  db.run(insertString, reqParams, error => {
    if (error) {
      console.log(`Failed to create user order.`, error);
      res.sendStatus(500);
    } else {
      console.log(`Successfully created user order.`);
      res.sendStatus(200);
    }
  });
});

app.put("/api/users/:id/bikedetails/:detailId", (req, res) => {
  const reqParams = [req.params.id, req.params, req.params.id, req.params.id];
  let updateOrders = `
    UPDATE orders SET 
      users_id = ?,
      bikespec_id = ?,
    WHERE orders.users_id = ? AND orders.bikespec_id = ?`;

  db.run(updateOrders, reqParams, error => {
    if (error) {
      console.log(`Failed to update order.`, error);
      res.sendStatus(500);
    } else {
      console.log(`Successfully updated order.`);
      res.sendStatus(200);
    }
  });
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});



// EACH BRANDS

// app.get("/api/specialized", (req, res) => {
//   const getAllSpecialized = "SELECT * FROM specialized";

//   db.all(getAllSpecialized, (error, results) => {
//     if (error) {
//       console.log("Get all specialized table failed", error);
//       res.sendStatus(500);
//     } else res.status(200).json(results);
//   });
// });
// app.get("/api/trek", (req, res) => {
//   const getAllTrek = "SELECT * FROM trek";

//   db.all(getAllTrek, (error, results) => {
//     if (error) {
//       console.log("Get all trek table failed", error);
//       res.sendStatus(500);
//     } else res.status(200).json(results);
//   });
// });

// app.get("/api/cannondale", (req, res) => {
//   const getAllCannondale = "SELECT * FROM cannondale";

//   db.all(getAllCannondale, (error, results) => {
//     if (error) {
//       console.log("Get all cannondale table failed", error);
//       res.sendStatus(500);
//     } else res.status(200).json(results);
//   });
// });

// // INDIVIDUAL BICYCLES

// app.get("/api/specializedbikes", (req, res) => {
//   const getAllSpecializedBikes = "SELECT * FROM specialized_bikes";

//   db.all(getAllSpecializedBikes, (error, results) => {
//     if (error) {
//       console.log("Get all specialized bikes table failed", error);
//       res.sendStatus(500);
//     } else res.status(200).json(results);
//   });
// });

// // Get one
// app.get("/api/specializedbikes/:id", (req, res) => {
//   const specId = req.params.id;
//   const getOneSpecializedBike = `SELECT * FROM specialized_bikes WHERE specialized_bikes.oid = ?`;

//   db.get(getOneSpecializedBike, [specId], (error, results) => {
//     if (error) {
//       console.log("Failed to retrieve one specialized bike from table", error);
//       res.sendStatus(500);
//     } else res.status(200).json(results);
//   });
// });

// // THIS ONE WORKS
// app.get("/api/specialized_bikes/:id", (req, res) => {
//   const makeId = req.params.id;
//   const getOneMake = `SELECT * FROM specialized_bikes WHERE specialized_bikes.oid = ?`;

//   db.all(getOneMake, [makeId], (error, results) => {
//     if (error) {
//       console.log("Failed to retrieve a bike make from table", error);
//       res.sendStatus(500);
//     } else res.status(200).json(results);
//   });
// });

// app.get("/api/trekbikes", (req, res) => {
//   const getAllTrekBikes = "SELECT * FROM trek_bikes";

//   db.all(getAllTrekBikes, (error, results) => {
//     if (error) {
//       console.log("Get all trek bikes table failed", error);
//       res.sendStatus(500);
//     } else res.status(200).json(results);
//   });
// });

// app.get("/api/cannondalebikes", (req, res) => {
//   const getAllCannondaleBikes = "SELECT * FROM cannondale_bikes";

//   db.all(getAllCannondaleBikes, (error, results) => {
//     if (error) {
//       console.log("Get all cannnondle bikes table failed", error);
//       res.sendStatus(500);
//     } else res.status(200).json(results);
//   });
// });