module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('channel', {
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    public: DataTypes.BOOLEAN,
  });
  // Channel.associate = models => {

  // }
  return Channel;
}