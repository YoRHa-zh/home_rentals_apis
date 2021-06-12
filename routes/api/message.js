const express = require('express')
const router = express.Router()
const {
    asyncHandler
} = require('../getSendResult')
const MessServ = require('../../service/messageServ')

//获取所有留言信息
router.get('/all', asyncHandler(async (req, res) => {
    const page = req.query.page || 1
    const limit = req.query.limit || 10
    return await MessServ.getAllMess(page,limit);
}))

//增加留言
router.post('/add',asyncHandler(async (req,res)=>{
    return await MessServ.addMess(req.body)
}))

//删除留言
router.delete('/:id',asyncHandler(async(req,res)=>{
    return await MessServ.deleteMess(req.params.id)
}))

module.exports = router;