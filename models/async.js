const sequelize = require('./db')
require('./admin')
require('./user')
require('./rentalList')
sequelize.sync({
    alter: true
}).then(() => {
    console.log("所有模型均已成功同步.");
})
