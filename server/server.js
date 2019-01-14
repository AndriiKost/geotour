'use strict';
// Load dependencies
const express = require('express');
const jwks = require('jwks-rsa');
const jwt = require('express-jwt');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// JWT middleware that will ensure the validity of our token.
const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://madison-events.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'http://localhost:3001',
    issuer: "https://madison-events.auth0.com/", // e.g., you.auth0.com
    algorithms: ['RS256']
});

// Public route
app.get('/api/objects/public', (req, res)=>{
  let objects = [
    { name: 'Wisconsin State Capitol' },
    { name: 'Wisconsin State Library' }
  ];
  res.json(objects);
})

// Private route
app.get('/api/objects/private', authCheck, (req,res)=>{
  let objects = [
    { id: 1, name: 'Wisconsin State Capitol', address: '2 E Main St, Madison, WI 53703', cords: {latitude: 43.0785186, longitude: -89.3870905 }}
  ];
  res.json(objects);
})

app.listen(3001);
console.log('Serving objects on localhost:3001');
