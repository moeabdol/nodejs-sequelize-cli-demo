const express = require('express');

const db = require('./models');

const app = express();

db.sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(3000, () => console.log('Server listening on port 3000'));
  })
  .catch(err => console.error(err));
