const {
    pathToRegexp
} = require('path-to-regexp');
const {
    getErr
} = require('./getSendResult');
const needTokenApi = [
    {method:'POST',path:'/api/user'},
    {method:'PUT',path:'/api/user/:id'},
    {method:'DELETE',path:'/api/user/:id'},
    {method:'GET',path:'/api/user/all'},
];
const cryptor = require('../util/crypt');
//解析token:
module.exports = (req,res,next)=>{
    const apis = needTokenApi.filter(api=>{
        const reg = pathToRegexp(api.path);
        return api.method === req.method && reg.test(req.path);
    })
    if(apis.length === 0){
        next();
        return;
    }
    let token = req.cookies.token;
    if(!token){
        token = req.headers.authorization;
    }
    if(!token){
        handleNonToken(req,res,next);
        return;
    }
    const userId = cryptor.decrypt(token);
    req.userId = userId;
    next();
}
function handleNonToken(req,res,next){
    res.status(403).send(getErr('you dont have any token to access the api',403))
}