//此处是增加一个订单操作，由于自增ID必须同步执行，此处单独封装
var mongoose=require('../../conf/db'),
    Schema=mongoose.Schema;
var BangBangUserOrderModel=require('./BangBangUserOrderSchema');
var OrderIdSchema=new Schema({
    _id:String,
    next: {type: Number, default: 1}
});
//添加一个方法
OrderIdSchema.statics.increment=function (counter, callback) {
    return this.findByIdAndUpdate(counter, { $inc: { next: 1 } }, {new: true, upsert: true, select: {next: 1}}, callback);
};
module.exports.addBangBangUserOrder=function (req,res) {
    //this.collection.findAndModify(query, sort, doc, options, callback);
    var OrderId=mongoose.model('OrderIdModel',OrderIdSchema);
    OrderId.increment('orderid',function (err,result) {
        if(err)
            throw err;
        else {
            //之所以要在这里进行插入操作，是因为nodejs单线程异步的特点导致了计算id操作在插入之后进行，从而不能获得id
            var BangBangUserOrder = new BangBangUserOrderModel({
                orderId:result.next,
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
                orderQR:req.body.orderqr
            });
            BangBangUserOrder.save(function (err) {
                if(err)
                    throw err;
                else
                    res.json("新增订单成功！");
            });
        }
    });
};