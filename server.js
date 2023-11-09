const express = require('express');
const routes = require('./routes');
// import sequelize connection
// it wasn't here before, but we need to import the connection to sync the models to the database
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// the sequelize.sync() method will sync all of the models to the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
