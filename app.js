const express = require('express');

const db = require('./models');
const User = db.sequelize.models.User;

const app = express();

app.get('/users/:userId/products', (req, res) => {
});

let connectedUser;
db.sequelize
  // .sync({ force: true })
  .sync()
  .then(() => User.findByPk(1))
  .then(user => {
    if (!user) {
      return User.create({
        username: 'moeabdol',
        email: 'mohd.a.saed@gmail.com'
      });
    }
    return user;
  })
  .then(user => {
    connectedUser = user;
    return user.getProducts();
  })
  .then(products => {
    if (products.length <= 0) {
      return connectedUser.createProduct({
        title: 'Book',
        description: 'foo bar'
      });
    }
    return products;
  })
  .then(() => {
    app.listen(3000, () => console.log('Server listening on port 3000'));
  })
  .catch(err => console.error(err));
