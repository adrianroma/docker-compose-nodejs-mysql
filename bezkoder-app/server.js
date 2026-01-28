require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cluster = require('node:cluster');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { or } = require("sequelize");
const app = express();



var corsOptions = {
  origin: "http://localhost:8080",
  origin: "http://localhost:3306",
  origin: "http://localhost:6868"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Swagger UI

console.log('specification');
//console.log(swaggerDocument);

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/",(req, res) => {
  res.json({ message: "Welcome to avros application." });
});

app.get("/error",(req, res) => {
  res.json({ message: "error" });
});

app.use("/api", require("./app/routes/routes"));

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});

function middleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send('Authorization header missing');
  }

  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).send('Invalid authorization format. Must be Bearer token.');
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
      return res.status(401).send('Token missing from header');
  }
  
  req.token = token;
  next();
}