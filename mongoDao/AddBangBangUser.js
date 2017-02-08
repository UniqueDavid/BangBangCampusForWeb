//整个封装为了完成用户ID自增后再进行用户的插入操作
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
module.exports.addBangBangUser=function (userNickname,userPassword,userSex,userAvatar,userBirth,userPhone,userAddress,userSchool,userOrganization,userLevel,userFocus,userLabel,userFavor,userSkill,userStatus,userSafeQuestion,userReputation,userCredit,userFans,userFollow,userBangBiValue,userBonus) {
    //this.collection.findAndModify(query, sort, doc, options, callback);
   var UserId=mongoose.model('UserIdModel',UserIdSchema);
    UserId.increment('userid',function (err,result) {
        if(err)
            throw err;
        else {
            //之所以要在这里进行插入操作，是因为nodejs单线程异步的特点导致了计算id操作在插入之后进行，从而不能获得id
            var BangBangUser = new BangBangUserModel({
                userNickName:userNickname,
                userId: result.next,
                userPassword:userPassword,
                userSex:userSex,
                userAvatar:userAvatar,
                userBirth:userBirth,
                userPhone:userPhone,
                userAddress:userAddress,
                userSchool:userSchool,
                userOrganization:userOrganization,
                userLevel:userLevel,
                userFocus:userFocus,
                userLabel:userLabel,
                userFavor:userFavor,
                userSkill:userSkill,
                userStatus:userStatus,
                userSafeQuestion:userSafeQuestion,
                userReputation:userReputation,
                userCredit:userCredit,
                userFans:userFans,
                userFollow:userFollow,
                userBangBiValue:userBangBiValue,
                userBonus:userBonus
            });
            BangBangUser.save(function (err) {
                if(err)
                    throw err;
                else
                    return "新增用户成功！";
            });
        }
    });
};