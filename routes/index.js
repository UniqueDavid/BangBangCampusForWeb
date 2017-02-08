var express = require('express');
var mongoDao=require('../mongoDao/mongoDao');
var AddBangBangUser=require('../mongoDao/AddBangBangUser');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
        res.render('index', { title: 'Express',user:req.session.user });
});
//登录页面的路由控制
router.get('/cmsLogin', function(req, res) {
    if(req.session.check)
        res.render('cmsLogin',{user:user});
    else
        res.render('cmsLogin');
});
router.post('/cmsLogin',function (req,res) {
    mongoDao.findCmsUser(req,res);
});

//获取所有的用户信息,一定要用post方法否则显示不出来
router.post('/GetUserInfo',function (req,res) {
    mongoDao.findAllUser(req,res);
});
router.get('/main',function (req,res) {
    res.render('main');
});

//新增用户
router.post('/addNewUser',function (req,res) {
   var result=AddBangBangUser.addBangBangUser(req.body.usernickname,req.body.userpassword,req.body.usersex,req.body.useravatar,new Date(req.body.userbirth).getTime(),parseInt(req.body.userphone),req.body.useraddress,req.body.userschool,req.body.userorganization,1,[req.body.userfocus],[req.body.userlabel],[req.body.userfavor],[req.body.userskill],1,{question:req.body.usersafequestion,answer:'ok'},'一颗星',0,[],[],0,0);
});
module.exports = router;
