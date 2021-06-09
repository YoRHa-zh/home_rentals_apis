const sequelize = require('./db')
require('./admin')
require('./user')
require('./rentalList')
require('./message')
sequelize.sync({
    alter: true
}).then(() => {
    console.log("所有模型均已成功同步.");
})
