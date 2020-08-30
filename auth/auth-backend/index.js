const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

// ---------------------------------------- MIDDLEWARE ---------------------------------------- //

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Custom Logger Middleware
app.use((req, res, next) => {
  const url = req.url;
  const method = req.method;
  const requestedAt = new Date().toLocaleString();
  console.log(`URL:${url} -  METHOD:${method} - AT:${requestedAt}`);
  next();
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

const corsOptions = {
  origin: ['http://localhost:4000'], // string or array
  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// ------------------------------------------ ROUTES ------------------------------------------ //

// GET Root Route
app.get('/', (req, res) => res.send('<h1>Welcome to Auth API</h1>'));

// Auth Routes
app.use('/api/v1/auth', routes.auth);

// Contacts Routes
app.use('/api/v1/contacts', routes.contacts);

// Users Routes
app.use('/api/v1/users', routes.users);


// ---------------------------------------- START SERVER ---------------------------------------- //

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
