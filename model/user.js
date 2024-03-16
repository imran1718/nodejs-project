const { Model } = require('sequelize');
const sequelize = require('../Postgres/postgres');
class User extends Model {}
User.init({
    userId:{
        type: DataTypes.STRING,
    },
    userName:{
        type: DataTypes.STRING,
    }
},
{
    sequelize,
    modelName: 'User',
    tableName: 'user',
  }
);
module.exports = User;