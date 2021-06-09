const express = require('express');
const router = express.Router();
const adminServ = require('../../service/adminServ')
const {
    asyncHandler
} = require('../getSendResult');
const cryptor = require('../../util/crypt')

//管理员登录接口
router.post('/login', asyncHandler(async (req, res) => {
    const result = await adminServ.login(req.body.loginId, req.body.loginPwd)
    if (result) {
        //登录成功
        let value = result.id;
        value = cryptor.encrypt(value.toString());
        res.cookie(`token`, value, {
            path: '/',
            domain: 'localhost',
            maxAge: 3600 * 1000 * 24 * 7//毫秒
        });
        const role = 'admin';
        result.role = role
        res.header('authorization', value);
    }
    return result;
}))
module.exports = router;