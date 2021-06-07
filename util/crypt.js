const secret = Buffer.from('by9oln0lygf3b497')
const crypto = require('crypto');

const iv = Buffer.from('50qipeenrygb5r14');

//加密
exports.encrypt = function(str){
    const cry = crypto.createCipheriv('aes-128-cbc',secret,iv);
    let result = cry.update(str,'utf-8','hex');
    result += cry.final('hex')
    return result
}

//解密
exports.decrypt = function(str){
    const decry = crypto.createDecipheriv('aes-128-cbc',secret,iv);
    let result = decry.update(str,'hex','utf-8');
    result += decry.final('utf-8');
    return result;
}