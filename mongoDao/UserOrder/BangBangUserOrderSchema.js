/**
 *帮帮客户端用户订单模型
 */
var mongoose=require('../../conf/db'),
    Schema=mongoose.Schema;
var BangBangUserOrderSchema=new Schema({
    orderId:Number,
    orderRecievedTime:Number,
    orderDoneTime:Number,
    orderStaus:Number,
    orderCancelLimit:Number,
    orderEffectiveTime:Number,
    orderLocation:{
        x:Number,
        y:Number
    },
    orderTitle:String,
    orderContext:String,
    orderImg:String,
    orderType:String,
    orderBonusValue:Number,
    orderBangBiValue:Number,
    posterId:Number,
    recieverId:Number,
    verification:Number,
    orderQR:String
});
module.exports=mongoose.model('BangBangUserOrderModel',BangBangUserOrderSchema,'tUserOrder');