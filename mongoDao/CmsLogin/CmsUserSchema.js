//后台管理系统的登录用户Schema
var mongoose=require('../../conf/db'),
    Schema=mongoose.Schema;
var CmsUserSchema=new Schema({
    username:String,
    password:String,
    state:Number
});
//生成model
module.exports=mongoose.model("cmsUser",CmsUserSchema,"BangBangUserInfo");