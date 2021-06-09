const Mock = require('mockjs')
const User = require('../models/user')
 const result = Mock.mock({
    "datas|10":[{
        name:'@cname',
        card:/3\d{17}/,
        phone:/1\d{10}/
    }]
}).datas

User.bulkCreate(result)
