/**
 * 帮帮用户技能Schema定义
 */
var mongoose=require('../../conf/db'),
    Schema=mongoose.Schema;
//定义好skill的schema
var BangBangUserSkillSchema=new Schema({
    skillId:Number,
    skillName:String,
    skillType:String
});
module.exports=mongoose.model('BangBangUserSkillModel',BangBangUserSkillSchema,'tUserSkill');