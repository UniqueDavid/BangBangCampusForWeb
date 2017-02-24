var express=require('express');
var BangBangUserIdentityModel=require('../UserIdentity/BangBangUserIdentitySchema');
//审核用户身份，即更新用户verification字段
module.exports.verifyCheckedUserIdentity=function(req,res){
    var isPass=req.body.pass;
    if(isPass==1){
        BangBangUserIdentityModel.update({userId:req.body.userId},{$set:{verification:201}},function(err,result){
            if(!err)
                res.json('已经标记为审核通过！');
        });
    }else if(isPass==0){
        BangBangUserIdentityModel.update({userId:req.body.userId},{$set:{verification:301}},function(err,result){
            if(!err)
                res.json('已经标记为审核不通过');
        });
    }else
        res.json('非法请求！！')
};
//批量审核用户身份
module.exports.verifyCheckedUserIdentities=function (req,res) {
    var userIds=req.body.userIds.split(",");
    var isPass=req.body.pass;
    console.log(userIds);
    if(isPass==1){
        BangBangUserIdentityModel.update({userId:{$in:userIds}},{$set:{verification:201}},function (err,result) {
            if(!err)
                res.json('批量审核通过完成！');
        });
    }else if(isPass==0){
        BangBangUserIdentityModel.update({userId:{$in:userIds}},{$set:{verification:301}},function (err,result) {
            if(!err)
                res.json('批量审核不通过完成！');
        });
    }
};
//删除用户身份，后期做关联
module.exports.deleteUserIdentity=function(req,res){
    BangBangUserIdentityModel.remove({userId:req.body.userId},function(err,result){
        if(!err&&result!='')
            res.json('成功删除该用户的审核信息！');
        else
            res.json('删除审核信息失败！！');
    });
};
//获取所有的用户身份审核信息
module.exports.findAllUserIdentity=function(req,res){
    BangBangUserIdentityModel.find({},function(err,result){
        if(!err)
            res.json(result);
        else
            throw err;
    });
};

//获取所有的审核通过用户数量
module.exports.getPassedUsers=function (req,res){
    BangBangUserIdentityModel.count({verification:201},function (err,result) {
            if(!err)
                res.json(result+'位');
    });
};
//获取所有的审核通过用户数量
module.exports.getNotPassedUsers=function (req,res){
    BangBangUserIdentityModel.count({verification:301},function (err,result) {
        if(!err)
            res.json(result+'位');
    });
};
//获取未审核用户数量
module.exports.getUncheckedUsers=function (req,res){
    BangBangUserIdentityModel.count({verification:0},function (err,result) {
        if(!err)
            res.json(result+'位');
    });
};