// 设置模型关系
const Rental = require('./rentalList')
const User = require('./user')
const Message = require('./message')

User.hasMany(Message,{
    foreignKey:'UserId'
})
Message.belongsTo(User)
User.hasMany(Rental)
Rental.belongsTo(User);


