module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('memeber', {
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Member;
}
