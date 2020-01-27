module.exports = {
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "sequelize",
  define: {
    timestamps: true, // Automatically set created_at & updated_at
    underscored: true // Snake case
  }
};
