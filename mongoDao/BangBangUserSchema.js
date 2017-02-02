/**
 * Created by Administrator on 2017/2/1.
 */
/**
 * 帮帮客户端的用户信息模式
 */
var mongoose=require('../conf/db'),
    Schema=mongoose.Schema;
var BangBangSchema=new Schema({
    userId:Number,
    userNickName:String,
    userPassword:String,
    userSex:String,
    userAvatar:String,
    userBirth:Number,
    userPhone:Number,
    userAddress:String,
    userSchool:String,
    userOrganization:String,
    userLevel:Number,
    userFocus:[String],
    userLabel:[String],
    userFavor:[String],
    userSkill:[String],
    userStatus:Number,
    userSafeQuestion:{
        question:String,
        answer:String
    },
    userReputation:String,
    userCredit:Number,
    userFans:[String],
    userFollow:[String],
    userBangBiValue:Number,
    userBonus:Number
});
//生成model
module.exports=mongoose.model("BangBangUserModel",BangBangSchema,"BangBangUserInfo");