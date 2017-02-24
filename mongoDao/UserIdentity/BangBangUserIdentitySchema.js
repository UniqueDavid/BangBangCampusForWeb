/**
 * 帮帮用户身份审核Schema定义
 */
var mongoose=require('../../conf/db'),
    Schema=mongoose.Schema;
//定义好identity的schema
var BangBangUserIdentitySchema=new Schema({
    userId:Number,
    school:String,
    dept:String,
    major:String,
    grade:String,
    dormitory:String,
    studentId:String,
    cardImg:String,
    faceImg:String,
    verification:Number
});
module.exports=mongoose.model('BangBangUserIdentityModel',BangBangUserIdentitySchema,'tIdVerification');