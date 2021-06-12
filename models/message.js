const sequelize = require('./db')
const {
    DataTypes
} = require('sequelize');
const Message = sequelize.define('Message', {
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },

    UserId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
}, {
    createdAt:false,
    updatedAt:false,
    // paranoid:true
});
module.exports = Message