var express=require('express');
var BangBangUserSkillModel=require('./BangBangUserSkillSchema');
//新增一个技能，注意ID自升


//删除一个技能
module.exports.deleteBangBangUserSkill=function (req,res) {
    console.log(req.body);
    BangBangUserSkillModel.remove({skillId:req.body.skillId},function (err,result) {
        if(!err&&result!=''){
            res.send(result);
        }else
            throw err;
    });
};

//批量删除技能
module.exports.deleteCheckedBangBangUserSkill=function (req,res) {
    var skillIds=req.body.skillIds.split(",");
    BangBangUserSkillModel.remove({skillId:{$in:skillIds}},function (err,result) {
        if(!err&&result!=''){
            res.send(result);
        }else
            throw err;
    });
};

//更新一个技能
module.exports.alterBangBangUserSkill=function (req,res) {
    console.log("data"+req.body.skillname);
    BangBangUserSkillModel.update({skillId:parseInt(req.body.skillid)},{$set:{skillName:req.body.skillname,
        skillType:req.body.skilltype}},function (err,result) {
        if(!err&&result!=''){
            res.send(result);
        }else
            throw err;
    });
};
//查找一个技能
module.exports.findUserSkillBySkillId=function(req,res){
    var findSkillId=req.body.skillId;
    var wherestr={skillId:findSkillId};
    BangBangUserSkillModel.find(wherestr,function (err,result) {
        if(!err&&result!='')
            res.json(result);
        else
            throw err;
    });
};
//查找所有技能
module.exports.findAllUserSkill=function(req,res){
    BangBangUserSkillModel.find({},function (err,result) {
        if(!err)
        {
            res.json(result);
            console.log(result);
        }
        else
            throw err;
    });
};