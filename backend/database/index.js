let express = require("express");
let db = require("./database.js");
let app = express();

// Middleware
app.use(express.json());

const port = 9000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
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
        `Failed to create new user with name ${req.body.first_name} ${req.body.last_name}`
      );
      res.sendStatus(500);
    } else {
      console.log(
        `Successfully added new user ${req.body.first_name} ${req.body.last_name}`
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
          `Failed to update a user named ${req.body.first_name} ${req.body.last_name}`,
          error
        );
        res.sendStatus(500);
      } else {
        console.log(
          `User named ${req.body.first_name} ${req.body.last_name} was updated successfully`
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
      console.log(`Failed to delete from user with id of ${userId} failed`);
    } else {
      console.log(`Successfully deted from customer with id of ${userId}`);
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

// BIKE MAKE

app.get("/api/specialized", (req, res) => {
  const getAllSpecialized = "SELECT * FROM specialized";

  db.all(getAllSpecialized, (error, results) => {
    if (error) {
      console.log("Get all specialized table failed", error);
      res.sendStatus(500);
    } else res.status(200).json(results);
  });
});
app.get("/api/trek", (req, res) => {
  const getAllTrek = "SELECT * FROM trek";

  db.all(getAllTrek, (error, results) => {
    if (error) {
      console.log("Get all trek table failed", error);
      res.sendStatus(500);
    } else res.status(200).json(results);
  });
});

app.get("/api/cannondale", (req, res) => {
  const getAllCannondale = "SELECT * FROM cannondale";

  db.all(getAllCannondale, (error, results) => {
    if (error) {
      console.log("Get all cannondale table failed", error);
      res.sendStatus(500);
    } else res.status(200).json(results);
  });
});

app.get("/api/specialized/:id", (req, res) => {
  const makeId = req.params.id;
  const getOneMake = `SELECT * FROM bike_make WHERE bike_make.oid = ?`;

  db.all(getOneMake, [makeId], (error, results) => {
    if (error) {
      console.log("Failed to retrieve a bike make from table", error);
      res.sendStatus(500);
    } else res.status(200).json(results);
  });
});

// app.post("/api/bikemake", (req, res) => {
//   const reqBody = [req.body.brand];
//   const insertNewMake = "INSERT INTO bike_make (?)";

//   db.run(insertNewMake, reqBody, error => {
//     if (error) {
//       console.log(
//         `Failed to create bike make: ${req.body.brand}`
//       );
//       res.sendStatus(500);
//     } else {
//       console.log(
//         `Successfully created bike make ${req.body.brand} `
//       );
//       res.sendStatus(200);
//     }
//   });
// });

// app.put("/api/bikemake/:id", (req, res) => {
//   const makeId = req.params.id;
//   const updateMake = `
//     UPDATE bike_make SET 
//       BRAND = ?,
//     WHERE bike_make.oid = ${makeId}`;

//   db.run(updateMake, [req.body.brand], error => {
//       if (error) {
//         console.log(`Failed to update bike make`, error);
//         res.sendStatus(500);
//       } else {
//         console.log(`Successfully updated bike make`);
//         res.sendStatus(200);
//       }
//     }
//   );
// });

// app.delete("/api/bikemake/:id", (req, res) => {
//   const makeId = [req.params.id];
//   const deleteMake = `DELTE FROM bike_make WHERE ? = bike_make.oid`;

//   db.run(deleteMake, makeId, error => {
//     if (error) {
//       console.log(`Failed to delete from make with id of ${makeId}`);
//       res.sendStatus(500);
//     } else {
//       console.log(`Successfully deleted make with id of ${makeId}`);
//       res.sendStatus(200);
//     }
//   });
// });

// BIKE SPECS

app.get("/api/specializedbikes", (req, res) => {
  const getAllSpecializedBikes = "SELECT * FROM specialized_bikes";

  db.all(getAllSpecializedBikes, (error, results) => {
    if (error) {
      console.log("Get all specialized bikes table failed", error);
      res.sendStatus(500);
    } else res.status(200).json(results);
  });
});
app.get("/api/trekbikes", (req, res) => {
  const getAllTrekBikes = "SELECT * FROM trek_bikes";

  db.all(getAllTrekBikes, (error, results) => {
    if (error) {
      console.log("Get all trek bikes table failed", error);
      res.sendStatus(500);
    } else res.status(200).json(results);
  });
});
app.get("/api/cannondalebikes", (req, res) => {
  const getAllCannondaleBikes = "SELECT * FROM cannondale_bikes";

  db.all(getAllCannondaleBikes, (error, results) => {
    if (error) {
      console.log("Get all cannnondle bikes table failed", error);
      res.sendStatus(500);
    } else res.status(200).json(results);
  });
});

// app.get("/api/bikespecs/:id", (req, res) => {
//   const specId = req.params.id;
//   const getOneSpec = `SELECT * FROM bike_specs WHERE bike_specs.oid = ?`;

//   db.all(getOneSpec, [specId], (error, results) => {
//     if (error) {
//       console.log("Failed to retrieve a bike spec from table", error);
//       res.sendStatus(500);
//     } else res.status(200).json(results);
//   });
// });

// app.post("/api/bikespecs", (req, res) => {
//   const reqBody = [
//     req.body.brand_name,
//     req.body.type,
//     req.body.category,
//     req.body.size,
//     req.body.color,
//     req.body.material,
//     req.body.component
//   ];
//   const insertNewSpec = "INSERT INTO bike_specs (?, ?, ?, ?, ?, ?, ?)";

//   db.run(insertNewSpec, reqBody, error => {
//     if (error) {
//       console.log(`Failed to create a bike spec.`);
//       res.sendStatus(500);
//     } else {
//       console.log(`Successfully created a bike spec.`);
//       res.sendStatus(200);
//     }
//   });
// });

// app.put("/api/bikespecs/:id", (req, res) => {
//   const specId = req.params.id;
//   const updateSpec = `
//     UPDATE bike_specs SET 
//       BRAND_NAME = ?,
//       TYPE = ?,
//       CATEGORY = ?
//       SIZE = ?,
//       COLOR = ?,
//       MATERIAL = ?
//       COMPONENT = ?
//     WHERE bike_specs.oid = ${specId}`;

//   db.run(
//     updateSpec,
//     [
//       req.body.brand_name,
//       req.body.type,
//       req.body.category,
//       req.body.size,
//       req.body.color,
//       req.body.material,
//       req.body.component
//     ],
//     error => {
//       if (error) {
//         console.log(`Failed to update bike spec`, error);
//         res.sendStatus(500);
//       } else {
//         console.log(`Successfully updated bike spec`);
//         res.sendStatus(200);
//       }
//     }
//   );
// });

// app.delete("/api/bikespecs/:id", (req, res) => {
//   const specId = [req.params.id];
//   const deleteSpec = `DELTE FROM bike_specs WHERE ? = bike_specs.oid`;

//   db.run(deleteSpec, specId, error => {
//     if (error) {
//       console.log(`Failed to delete a spec with id of ${specId}`);
//       res.sendStatus(500);
//     } else {
//       console.log(`Successfully deleted a spec with id of ${specId}`);
//       res.sendStatus(200);
//     }
//   });
// });

// ORDERS JOIN TABLE

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

app.get("/api/users/:id/bikespecs", (req, res) => {
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

app.post("/api/users/:id/bikespecs/:specId", (req, res) => {
  const reqParams = [req.params.id, req.params.specId];
  const insertString = "INSERT INTO orders VALUES (?, ?)";

  db.run(insertString, reqParams, error => {
    if (error) {
      console.log(`Failed to create user order`, error);
      res.sendStatus(500);
    } else {
      console.log(`Successfully created user order`);
      res.sendStatus(200);
    }
  });
});

app.put("/api/users/:id/bikespecs/:specId", (req, res) => {
  const reqParams = [req.params.id, req.params, req.params.id, req.params.id];
  let updateOrders = `
    UPDATE orders SET 
      users_id = ?,
      bikespec_id = ?,
    WHERE orders.users_id = ? AND orders.bikespec_id = ?`;

  db.run(updateOrders, reqParams, error => {
    if (error) {
      console.log(`Failed to update order`, error);
      res.sendStatus(500);
    } else {
      console.log(`Successfully updated order`);
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
