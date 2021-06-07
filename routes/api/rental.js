const express = require('express');
const router = express.Router();
const renServ = require('../../service/rentalServ');
const {
    asyncHandler
} = require('../getSendResult')

//获取房源信息
router.get('/all', asyncHandler(async (req, res) => {
    const page = req.query.page || 1
    const limit = req.query.limit || 10
    const address = req.query.address || ''
    return await renServ.getRens(page,limit,address);
}))
//添加房源信息
router.post('/add',asyncHandler(async(req,res)=>{
    return await renServ.addRen(req.body)
}))
//更新房源信息
router.put('/:id',asyncHandler(async(req,res)=>{
    return await renServ.updateRen(req.params.id,req.body)
}))
//删除房源信息
router.delete('/:id',asyncHandler(async(req,res)=>{
    return await renServ.deleteRen(req.params.id)
}))

module.exports = router;