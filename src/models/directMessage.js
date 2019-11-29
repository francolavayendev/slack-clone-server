module.exports = (sequelize, DataTypes) => {
  const DirectMessage = sequelize.define('direct_message', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return DirectMessage;
}