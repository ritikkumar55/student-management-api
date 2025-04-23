const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const schoolRoutes = require('./routes/school');
require('dotenv').config();

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/', schoolRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
