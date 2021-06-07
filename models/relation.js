// 设置模型关系
const Rental = require('./rentalList')
const User = require('./user')
User.hasMany(Rental)
Rental.belongsTo(User);
