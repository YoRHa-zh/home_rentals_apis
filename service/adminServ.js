const Admin = require('../models/admin');

exports.login = async function (loginId,loginPwd){
    const result = await Admin.findOne({
        where:{
            loginId,
            loginPwd
        }
    })
    if(result && result.loginId === loginId && result.loginPwd === loginPwd){
        return result.toJSON();
    }
    return null;
}