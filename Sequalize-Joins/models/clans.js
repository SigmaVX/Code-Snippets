module.exports = function(sequelize, DataTypes) {

    var Clans = sequelize.define("Clans", {
        clan_name: DataTypes.STRING,
      });
    
      Clans.associate = function(db) {
        Clans.hasMany(db.Players,{through: "clans_players"});
      };

      Clans.associate = function(db) {
        Clans.hasMany(db.Events, {through: "clans_events"});
      };
    
      return Clans;
};