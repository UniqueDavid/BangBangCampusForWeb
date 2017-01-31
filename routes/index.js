var express = require('express');
var mongoDao=require('../mongoDao/mongoDao');
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
module.exports = router;
