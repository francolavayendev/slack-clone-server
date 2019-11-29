module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    text: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    filetype: DataTypes.STRING,
  });
}