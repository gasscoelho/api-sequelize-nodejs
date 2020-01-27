const Tech = require("../../models/Tech");
const User = require("../../models/User");

module.exports = {
  /**
   * List user's techs
   */
  async index(req, res) {
    const { user_id } = req.params;

    // Get user's techs without pivot table info (user_techs)
    const user = await User.findByPk(user_id, {
      include: { association: "techs", through: { attributes: [] } }
    });

    // Check if user exist
    if (!user) {
      return res.status(404).send({ error: "User not found." });
    }

    return res.status(200).send({ techs: user.techs });
  },

  /**
   * Create user's tech
   */
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    // Check if user exist
    if (!user) {
      return res.status(404).send({ error: "User not found." });
    }

    const [tech] = await Tech.findOrCreate({
      where: { name }
    });

    await user.addTech(tech);

    return res.status(200).send({ tech });
  },

  /**
   * Delete user's tech
   */
  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    // Check if user exist
    if (!user) {
      return res.status(404).send({ error: "User not found." });
    }

    const tech = await Tech.findOne({
      where: { name }
    });

    await user.removeTech(tech);

    return res.status(200).send({ message: "Succesfully deleted." });
  }
};
