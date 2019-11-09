module.exports = function(sequelize, DataTypes) {

    var Events = sequelize.define("Events", {
        event_number: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        event_name: {
            type: DataTypes.STRING
        },
        clan_name: {
            type: DataTypes.STRING
        },
        player_name: {
            type: DataTypes.STRING
        }
      });
    
      Events.associate = function(db) {
        Events.belongsToMany(db.Players, {through: "players_events"});
      };

      Events.associate = function(db) {
        Events.belongsToMany(db.Clans, {through: "clans_events"});
      };
    
      return Events;
};