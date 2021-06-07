const Rental = require('../models/rentalList');
const User = require('../models/user')
const {
    Op
} = require('sequelize')
exports.addRen = async function (renObj) {
    const ins = await Rental.create(renObj);
    return ins.toJSON()
}
exports.deleteRen = async function (id) {
    const ins = await Rental.destroy({
        where: {
            id
        }
    })
    return ins;
}
exports.updateRen = async function (id, renObj) {
    const ins = await Rental.update(renObj, {
        where: {
            id
        }
    })
    return ins;
}
exports.getRenById = async function (id) {
    const result = await Rental.findByPk(id);
    if (result) {
        return result.toJSON()
    }
    return null
}
exports.getRens = async function (page = 1,
    limit = 10, address = '') {
    const where = {};
    if (address) {
        where.address = {
            [Op.like]: `%${address}%`,
        };
    }
    const result = await Rental.findAndCountAll({
        attributes: ["id","address", "area", "floor", "rent", "region", "model", "direction", "enviroment", "isDecoration"],
        where,
        include: [User],
        offset: (page - 1) * limit,
        limit: +limit,
    })
    return {
        total:result.count,
        data: JSON.parse(JSON.stringify(result.rows))
    }
}