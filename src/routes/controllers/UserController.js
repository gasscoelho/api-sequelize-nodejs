const User = require("../../models/User");

module.exports = {
  /**
   * Create user into the database
   */
  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.status(200).send({ user });
  },

  /**
   * Get all Users
   */
  async index(req, res) {
    const users = await User.findAll();

    return res.status(200).send({ users });
  }
};
