//整个封装为了完成用户ID自增
var mongoose=require('../conf/db'),
    Schema=mongoose.Schema;
var BangBangUserModel=require('./BangBangUserSchema');
var UserIdSchema=new Schema({
    _id:String,
    next: {type: Number, default: 1}
});
//添加一个方法
UserIdSchema.statics.increment=function (counter, callback) {
    return this.findByIdAndUpdate(counter, { $inc: { next: 1 } }, {new: true, upsert: true, select: {next: 1}}, callback);
};
module.exports.addBangBangUser=function () {
    //this.collection.findAndModify(query, sort, doc, options, callback);
   var UserId=mongoose.model('UserIdModel',UserIdSchema);
    UserId.increment('userid',function (err,result) {
        if(err)
            throw err;
        else {
            var BangBangUser = new BangBangUserModel({
                userNickName: 'wang',
                userId: result.next
            });
            BangBangUser.save(function (err) {
                if(err)
                    throw err;
                else
                    console.log(BangBangUser);
            });
        }

    });
};