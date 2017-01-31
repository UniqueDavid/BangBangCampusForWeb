//对于mongodb的相关操作
var express = require('express');
//查询
var CmsUser=require('./CmsUserSchema');
//根据用户名和密码查询
module.exports.findCmsUser=function findCmsUser(req,res) {
    var username=req.body.username;
    var password=req.body.password;
    var checkbox=req.body.cbRememberPwd;
    var wherestr={'username':username,'password':password};
    CmsUser.find(wherestr,function (err,result) {
        if(!err&&result!='')
        {
            if(checkbox)
            {
                req.session.check=true;
            }
            var user={username:username,password:password};
            req.session.user=user;
            res.send('登录成功！！');
        }
        else
            res.send('用户名或密码错误！！');
    });
};
module.exports.findAllUser=function findAllUser(req,res) {
    CmsUser.find({},function (err,result) {
        if(!err)
        {
            res.json(result);
        }
        else
           throw err;
    });
};