/**
 * Created by Administrator on 2017/2/1.
 */
/**
 * 帮帮客户端的用户信息模式
 */
var mongoose=require('../conf/db'),
    Schema=mongoose.Schema;
var BangBangSchema=new Schema({
    userId:Number,
    userNickName:String,
    userPassword:String,
    userSex:String,
    userAvatar:String,
    userBirth:Number,
    userPhone:Number,
    userAddress:String,
    userSchool:String,
    userOrganization:String,
    userLevel:{
        type:Number,
        default:1
    },
    userFocus:{
        type:[String],
        default:[""]
    },
    userLabel:{
        type:[String],
        default:[""]
    },
    userFavor:{
        type:[String],
        default:[""]
    },
    userSkill:{
        type:[String],
        default:[""]
    },
    userStatus:{
        type:Number,
        default:1
    },
    userSafeQuestion:{
        question:{
            type:String,
            default:""
        },
        answer:{
            type:String,
            default:""
        },
    },
    userReputation:{
        type:String,
        default:"一颗星"
    },
    userCredit:{
        type:Number,
        default:0
    },
    userFans:{
        type:[String],
        default:[""]
    },
    userFollow:{
        type:[String],
        default:[""]
    },
    userBangBiValue:{
        type:Number,
        default:0
    },
    userBonus:{
        type:Number,
        default:0
    },
});
//生成model
module.exports=mongoose.model("BangBangUserModel",BangBangSchema,"BangBangUserInfo");