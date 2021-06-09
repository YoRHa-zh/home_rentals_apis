const Message = require('./message')
const User = require('./user')

User.hasMany(Message,{
    foreignKey:'UserId'
})
Message.belongsTo(User)