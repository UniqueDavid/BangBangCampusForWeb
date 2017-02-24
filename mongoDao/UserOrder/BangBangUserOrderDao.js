var express=require('express');
var BangBangUserOrderModel=require('./BangBangUserOrderSchema');
//用户订单查询
//单个用户订单查询
//批量用户订单查询
//获取所有用户订单信息
module.exports.findAllUserOrder=function (req,res) {
    BangBangUserOrderModel.find({},function (err,result) {
        if(!err)
            res.json(result);
    });
};
//根据用户编号查询用户订单信息
module.exports.findUserOrderByOrderId=function (req,res) {
    var orderId=req.body.orderId;
    BangBangUserOrderModel.find({orderId:orderId},function (err,result) {
        if(!err)
            res.json(result);
    })
};
//根据用户编号更新用户订单信息
module.exports.alterUserOrder=function (req,res) {
    console.log(req.body);
    BangBangUserOrderModel.update({orderId:req.body.orderid},{$set:{
        orderRecievedTime:new Date(req.body.orderrecievedtime).getTime(),
        orderDoneTime:req.body.orderdonetime,
        orderStaus:1,
        orderCancelLimit:req.body.ordercancellimit,
        orderEffectiveTime:req.body.ordereffectivetime,
        orderLocation:{
            x:req.body.orderlocationx,
            y:req.body.orderlocationy
        },
        orderTitle:req.body.ordertitle,
        orderContext:req.body.ordercontext,
        orderImg:req.body.orderimg,
        orderType:req.body.ordertype,
        orderBonusValue:req.body.orderbonusvalue,
        orderBangBiValue:req.body.orderbangbivalue,
        posterId:req.body.posterid,
        recieverId:req.body.recieverid,
        verification:req.body.verification,
        orderQR:req.body.orderqr}},function (err,result) {
        if(!err&&result!=''){
            res.send(result);
        }else
            throw err;
    });
};
//审核订单
module.exports.checkUserOrder=function (req,res) {
    console.log(req.body);
    BangBangUserOrderModel.update({orderId:req.body.orderId},{$set:{
        verification:1
       }},function (err,result) {
        if(!err&&result!=''){
            res.send(result);
        }else
            throw err;
    });
};
//批量删除订单
module.exports.deleteCheckedOrder=function (req,res) {
    var orderIds=req.body.orderIds;
    BangBangUserOrderModel.remove({orderId:{$in:orderIds}},function (err,result) {
        if(!err&&result!=''){
            res.send(result);
        }else
            throw err;
    });
};
//根据ID删除订单
module.exports.deleteUserOrder=function (req,res) {
    BangBangUserOrderModel.remove({orderId:req.body.orderId},function (err,result) {
        if(!err&&result!=''){
            res.send(result);
        }else
            throw err;
    });
};