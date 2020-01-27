require("dotenv").config();

require("./database");

const express = require("express");

const bodyParser = require("body-parser");

const routes = require("./routes/routes")();

class AppController {
  constructor() {
    this.app = express();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(bodyParser.json());
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new AppController().app;
