const swaggerJSDoc = require('swagger-jsdoc')
const path = require('path')

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'My API',
    version: '1.0.0',
    description: 'My API Description',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
}
const options = {
  swaggerDefinition,
  apis: [
    path.join(__dirname, '../models/**/*.model.js'),
    path.join(__dirname, '../controllers/**/*.action.js'),
  ],
}
const swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec
