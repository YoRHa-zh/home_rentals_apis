const Message = require('../models/message');
const User = require('../models/user')
const {
    Op
} = require('sequelize')
exports.addMess = async function (messObj) {
    const ins = await Message.create(messObj);
    return ins.toJSON()
}
exports.deleteMess = async function (id) {
    const ins = await Message.destroy({
        where: {
            id
        }
    })
    return ins;
}
exports.getAllMess = async function (page=1,limit=100){
    const result = await Message.findAndCountAll({
        attributes: ["id", "time", "content"],
        include: [User],
        offset: (page - 1) * limit,
        limit: +limit,
    })
    return {
        total:result.count,
        data: JSON.parse(JSON.stringify(result.rows))
    }
}