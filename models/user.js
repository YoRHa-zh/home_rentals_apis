const sequelize = require('./db')
const {
    DataTypes
} = require('sequelize');
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    card: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    createdAt:false,
    updatedAt:false,
    // paranoid:true
});
module.exports = User