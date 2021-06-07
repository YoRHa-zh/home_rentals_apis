const User = require('../models/user');
const validate = require('validate.js')
const {
    Op
} = require('sequelize')
const {
    pick
} = require('../util/propertyHelper')
exports.addUser = async function (userObj) {
    userObj = pick(userObj, 'name', 'card', 'phone')
    const rule = {
        name: {
            presence: {
                allowEmpty: false
            },
            type: 'string',
            length: {
                minimum: 1,
                maximum: 10,
            },
        },
        card: {
            presence: {
                allowEmpty: false
            },
            type: 'string',
            length: {
                is: 16
            },
        },
        phone: {
            presence: {
                allowEmpty: false
            },
            type: 'string',
            format: /1\d{10}/,
        }
    }
    await validate.async(userObj, rule)
    const ins = await User.create(userObj);
    return ins.toJSON();
}
exports.deleteUser = async function (id) {
    const ins = await User.destroy({
        where: {
            id,
        }
    })
    return ins
}
exports.updateUser = async function (id, userObj) {
    const ins = await User.update(userObj, {
        where: {
            id
        }
    })
    return ins;
}
exports.getUserById = async function (id) {
    const result = await User.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

exports.getUsers = async function (
    name = ""
) {
    const where = {};
    if (name) {
        where.name = {
            [Op.like]: `%${name}%`,
        };
    }
    const result = await User.findAndCountAll({
        attributes: ['id', 'name', 'card', 'phone'],
        where,
    });
    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result.rows))
    }
}

//用户登录接口：
//这里loginId代表数据库中用户的name，loginPwd代表数据库中的phone
exports.login = async function (loginId, loginPwd) {
    let result = await User.findOne({
        where: {
            name: loginId,
            phone: loginPwd
        }
    })
    if (result && result.name === loginId && result.phone === loginPwd) {
        result = result.toJSON();
        result = pick(result, 'id','name', 'card', 'phone')
        return result;
    }
    return null;
}