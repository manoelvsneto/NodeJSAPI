const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
require('dotenv').config();
const personRoutes = require('./routes/personRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/persons', personRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
