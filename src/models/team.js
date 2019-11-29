module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });

  return Team;
};
