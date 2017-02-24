var express = require('express');
var mongoDao=require('../mongoDao/CmsLogin/mongoDao');
var AddBangBangUser=require('../mongoDao/UserInfo/AddBangBangUser');
var AddBangBangUserSkill=require('../mongoDao/UserSkill/AddBangBangUserSkill');
var AddBangBangUserOrder=require('../mongoDao/UserOrder/AddBangBangUserOrder');
var BangBangUserOrderDao=require('../mongoDao/UserOrder/BangBangUserOrderDao');
var BangBangUseInfoDao=require('../mongoDao/UserInfo/BangBangUserInfoDao');
var BangBangUseSkillDao=require('../mongoDao/UserSkill/BangBangUserSkillDao');
var BangBangUserIdentityDao=require('../mongoDao/UserIdentity/BangBangUserIdentityDao');
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
router.post('/GetAllUserInfo',function (req,res) {
    mongoDao.findAllUser(req,res);
});
//获取所有用户技能
router.post('/GetAllUserSkill',function (req,res) {
    BangBangUseSkillDao.findAllUserSkill(req,res);
});
//页面访问路由控制
router.get('/UserInfoPage',function (req,res) {
    res.render('UserInfoPage');
});
router.get('/UserSkillPage',function (req,res) {
    res.render('UserSkillPage');
});
router.get('/UserIdentityPage',function (req,res) {
    res.render('UserIdentityPage');
});
router.get('/UserOrderPage',function (req,res) {
    res.render('UserOrderPage');
});
//新增用户
router.post('/addNewUser',function (req,res) {
  AddBangBangUser.addBangBangUser(req,res);
});

//新增用户技能
router.post('/addNewUserSkill',function (req,res) {
    AddBangBangUserSkill.addBangBangUserSkill(req,res);
});

//更新用户
router.post('/alterNewUser',function (req,res) {
    BangBangUseInfoDao.alterBangBangUserInfo(req,res);
});

//更新技能
router.post('/alterUserSkill',function (req,res) {
    BangBangUseSkillDao.alterBangBangUserSkill(req,res);
});
//删除用户
router.post('/deleteUser',function (req,res) {
    BangBangUseInfoDao.deleteBangBangUserInfo(req,res);
});
//删除技能
router.post('/deleteSkill',function (req,res) {
    BangBangUseSkillDao.deleteBangBangUserSkill(req,res);
});
//批量删除用户
router.post('/deleteCheckedUser',function (req,res) {
    BangBangUseInfoDao.deleteCheckedBangBangUserInfo(req,res);
});
//批量删除技能
router.post('/deleteCheckedSkill',function (req,res) {
    BangBangUseSkillDao.deleteCheckedBangBangUserSkill(req,res);
});
//获取指定用户ID的用户信息
router.post('/findUserInfoByUserId',function (req,res) {
    BangBangUseInfoDao.findBangBangUserInfoByUserId(req,res);
});
//获取指定技能ID的技能信息
router.post('/findUserSkillBySkillId',function (req,res) {
    BangBangUseSkillDao.findUserSkillBySkillId(req,res);
});

//获取所有用户的身份审核状况
router.post('/GetAllUserIdentity',function (req,res) {
    BangBangUserIdentityDao.findAllUserIdentity(req,res);
});

//审核用户通过
router.post('/updateUserIdentity',function (req,res) {
    BangBangUserIdentityDao.verifyCheckedUserIdentity(req,res);
});

//批量审核用户
router.post('/passCheckedUser',function (req,res) {
    BangBangUserIdentityDao.verifyCheckedUserIdentities(req,res);
});
//获取通过审核的用户数量
router.post('/getPassedUsers',function (req,res) {
    BangBangUserIdentityDao.getPassedUsers(req,res);
});
//获取未通过审核的用户数量
router.post('/getNotPassedUsers',function (req,res) {
    BangBangUserIdentityDao.getNotPassedUsers(req,res);
});
//获取未审核的用户数量
router.post('/getUncheckedUsers',function (req,res) {
    BangBangUserIdentityDao.getUncheckedUsers(req,res);
});

//新增订单
router.post('/addNewOrder',function (req,res) {
    console.log(req.body);
   AddBangBangUserOrder.addBangBangUserOrder(req,res);
});
//获取所有的订单
router.post('/getAllUserOrder',function (req,res) {
    console.log(req.body);
    BangBangUserOrderDao.findAllUserOrder(req,res);
});
//根据ID查找相应订单
router.post('/findUserOrderByOrderId',function (req,res) {
    console.log(req.body);
    BangBangUserOrderDao.findUserOrderByOrderId(req,res);
});
//通过ID进行订单更新
router.post('/alterUserOrder',function (req,res) {
    console.log(req.body);
    BangBangUserOrderDao.alterUserOrder(req,res);
});
//审核订单
router.post('/checkOrder',function (req,res) {
    console.log(req.body);
    BangBangUserOrderDao.checkUserOrder(req,res);
});
//批量删除订单
router.post('/deleteCheckedOrder',function (req,res) {
    console.log(req.body);
    BangBangUserOrderDao.deleteCheckedOrder(req,res);
});
//根据ID删除订单
router.post('/deleteOrder',function (req,res) {
    console.log(req.body);
    BangBangUserOrderDao.deleteUserOrder(req,res);
});
module.exports = router;
