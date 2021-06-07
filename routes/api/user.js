const express = require('express');
const router = express.Router();
const userServ = require('../../service/userServ');
const cryptor = require('../../util/crypt')
const {
    asyncHandler
} = require('../getSendResult')

//获取所有用户信息的接口
router.get('/all', asyncHandler(async (req, res) => {
    const name = req.query.name || '';
    return await userServ.getUsers()
}))

//增加用户接口
router.post('/register', asyncHandler(async (req, res) => {
    return await userServ.addUser(req.body)
}))
//修改用户信息
router.put('/:id', asyncHandler(async (req, res) => {
    return userServ.updateUser(req.params.id, req.body)
}))
//删除用户信息
router.delete('/:id', asyncHandler(async (req, res, next) => {
    return await userServ.deleteUser(req.params.id)
}))
//用户登录接口
router.post('/login', asyncHandler(async (req, res) => {
    const result = await userServ.login(req.body.loginId, req.body.loginPwd)
    if (result) {
        //登录成功
        let value = result.id;
        value = cryptor.encrypt(value.toString());
        res.cookie(`token`, value, {
            path: '/',
            domain: 'localhost',
            maxAge: 3600 * 1000 //毫秒
        });
        const role = 'user';
        result.role = role;
        res.header('authorization', value);
    }
    return result;
}))
module.exports = router