const sequelize = require('./db')
const {
    DataTypes
} = require('sequelize');
const Rental = sequelize.define('Rental', {
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false
    },
    floor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    region: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model:{
        type:DataTypes.STRING,
        allowNull: false
    },
    direction:{
        type:DataTypes.STRING,
        allowNull: false
    },
    enviroment:{
        type:DataTypes.STRING,
        allowNull: false
    },
    isDecoration:{
        type:DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true
});
module.exports = Rental