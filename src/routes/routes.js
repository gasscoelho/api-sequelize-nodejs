const { Router } = require("express");

const routes = Router();

const UserController = require("./controllers/UserController");

const AddressController = require("./controllers/AddressController");

const TechController = require("./controllers/TechController");

const ReportController = require("./controllers/ReportController");

module.exports = () => {
  /**
   * Main Route
   */
  routes.get("/", (req, res) => {
    return res.status(200).send({ message: "success" });
  });

  /**
   * Create User
   */
  routes.post("/api/users", UserController.store);

  /**
   * List all users
   */
  routes.get("/api/users", UserController.index);

  /**
   * Create user's address
   */
  routes.post("/api/users/:user_id/addresses", AddressController.store);

  /**
   * List user's address
   */
  routes.get("/api/users/:user_id/addresses", AddressController.index);

  /**
   * Create user's tech
   */
  routes.post("/api/users/:user_id/techs", TechController.store);

  /**
   * List user's techs
   */
  routes.get("/api/users/:user_id/techs", TechController.index);

  /**
   * Delete user's tech
   */
  routes.delete("/api/users/:user_id/techs", TechController.delete);

  /**
   *
   */
  routes.get("/api/reports", ReportController.show);

  return routes;
};
