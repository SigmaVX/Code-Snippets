module.exports = function(sequelize, DataTypes) {

    var Players = sequelize.define("Players", {
        name: DataTypes.STRING
      });
    
      Players.associate = function(db) {
        Players.belongsToMany(db.Events, {through: "players_events"});
      };

      Players.associate = function(db) {
        Players.belongsToMany(db.Clans, {through: "players_clans"});
      };
    
      return Players;
};