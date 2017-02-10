var express = require('express');
var BangBangUserModel=require('./BangBangUserSchema');
//编写相应方法
//查询方法
//根据昵称查询用户信息
module.exports.findBangBangUserInfoByUserNickName=function (req,res) {
    var findUserNickName=req.body.findUserNickName;
    var wherestr={userNickName:'David'};
    BangBangUserModel.find(wherestr,function (err,result) {
        if(!err&&result!=''){
            res.json(result);
        }else
            throw err;
    });
};
//根据用户ID号查询用户信息
module.exports.findBangBangUserInfoByUserId=function (req,res) {
    var findUserId=req.body.userId;
    var wherestr={userId:findUserId};
    BangBangUserModel.find(wherestr,function (err,result) {
        if(!err&&result!=''){
            res.json(result);
        }else
            throw err;
    });
};
//更新用户信息
module.exports.alterBangBangUserInfo=function (req,res) {
    console.log(req.body);
    BangBangUserModel.update({userId:req.body.userid},{$set:{userNickName:req.body.usernickname,
        userPassword:req.body.userpassword,
        userSex:req.body.usersex,
        userAvatar:req.body.useravatar,
        userBirth:new Date(req.body.userbirth).getTime(),
        userPhone:parseInt(req.body.userphone),
        userAddress:req.body.useraddress,
        userSchool:req.body.userschool,
        userOrganization:req.body.userorganization,
        userFocus:[req.body.userfocus],
        userLabel:[req.body.userlabel],
        userFavor:[req.body.userfavor],
        userSkill:[req.body.userskill],
        userSafeQuestion:{question:req.body.usersafequestion,answer:req.body.usersafeanswer}}},function (err,result) {
        if(!err&&result!=''){
            res.json(result);
        }else
            throw err;
    });
};

//新增一个用户

module.exports.findBangBangUserInfo=function (findUserNickName) {
    var wherestr={userNickName:findUserNickName};
    BangBangUserModel.find(wherestr,function (err,result) {
        if(!err&&result!=''){
            console.log(result);
        }else
            throw err;
    });
};
