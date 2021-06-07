const Mock = require('mockjs')
const Rental = require('../models/rentalList');
const result = Mock.mock({
    "datas|100":[{
        address:'@county(true)',
        "area|35-200":1,
        "floor|1-20":1,
        "rent|1000-5000":1,
        region:"@county",
        "model|1":["公寓","住宅"],
        "direction|1":['东','南','西','北'],
        "enviroment|1":['市中心','学区房','地铁旁','郊区','海边'],
        "isDecoration|1":true,
        "UserId|1-10":1
    }]
}).datas

Rental.bulkCreate(result)