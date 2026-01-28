// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swagger: '2.0',
  definition: {
    info: {
      title: 'Your API Name',
      version: '1.0.0',
      description: 'API documentation for your Node.js application',
    },
    servers: [
      {
        url: 'http://localhost:8080', // Update with your server URL
        description: 'Internal server',
      }
    ]
  },
  // Looks for documentation in all route and controller files
  apis: ['bezkoder-app/app/controllers/data.js'], 
};

const swaggerSpec = swaggerJsdoc(options);



module.exports = {swaggerSpec};
