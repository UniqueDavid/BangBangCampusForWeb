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
