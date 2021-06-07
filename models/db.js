const {
    Sequelize
} = require('sequelize')
const sequelize = new Sequelize('home_rentals', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */ ,
    logging:null
});
module.exports = sequelize;