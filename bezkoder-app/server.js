require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cluster = require('node:cluster')
const app = express();


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.get("/",middleware,(req, res) => {
  res.json({ message: "Welcome to avros application." });
});


app.get("/error",middleware,(req, res) => {
  res.json({ message: "error" });
});



app.use("/api", require("./app/routes/routes"));



// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



function middleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send('Authorization header missing');
  }

  // Check if the header starts with 'Bearer '
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).send('Invalid authorization format. Must be Bearer token.');
  }

  // Optional: Extract and use the token part
  const token = authHeader.split(' ')[1];
  if (!token) {
      return res.status(401).send('Token missing from header');
  }
  
  // Store token in request object for downstream use
  req.token = token;

  // If validation passes, call next() to move to the next middleware or route handler
  next();
}