const Address = require("../../models/Address");

const User = require("../../models/User");

module.exports = {
  /**
   * Create user's address
   */
  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    // Check if users exist
    if (!user) {
      return res.status(404).send({ error: "User not found." });
    }

    const address = await Address.create({
      user_id,
      zipcode,
      street,
      number
    });

    return res.status(200).send({ address });
  },

  /**
   * List user's address
   */
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "addresses" }
    });

    // Check if users exist
    if (!user) {
      return res.status(404).send({ error: "User not found." });
    }

    return res.status(200).send({ addresses: user.addresses });
  }
};
