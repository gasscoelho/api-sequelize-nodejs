const { Op } = require("sequelize");
const User = require("../../models/User");

module.exports = {
  /**
   * Report
   */
  async show(req, res) {
    // Find all users who has email ending up with @gmail.com
    // From these users i want to search every one who lives in "Samambaia Sul" street
    // From these users i want to search all techs which start with "React"

    const users = await User.findAll({
      attributes: ["name", "email"],
      through: { attributes: ["id", "zipcode", "street", "number"] },
      where: {
        email: {
          [Op.like]: "%@gmail.com"
        }
      },
      include: [
        {
          association: "addresses",
          where: {
            street: "Samambaia Sul"
          }
        },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.like]: "Node%"
            }
          }
        }
      ]
    });

    return res.status(200).send({ users });
  }
};
