const Mock = require('mockjs')
const Message = require('../models/Message');
const result = Mock.mock({
    "datas|10":[{
        time:'@datetime',
        content:'@csentence(8, 20)',
        "UserId|1-10":1
    }]
}).datas
console.log(result)

Message.bulkCreate(result)