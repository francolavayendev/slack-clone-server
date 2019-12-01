module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('channel', {
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    public: DataTypes.BOOLEAN,
  });
  Channel.associate = models => {
    Channel.belongsTo(models.Team, {
      foreignkey: {
        name: 'teamId',
        field: 'team_id',
      },
    });
    Channel.belongsToMany(models.User, {
      through: 'channel_member',
      foreignkey: {
        name: 'channelId',
        field: 'channel_id'
      },
    });
  }
  return Channel;
}