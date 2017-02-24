//此处是增加一个用户技能操作，由于自增ID必须同步执行，此处单独封装
var mongoose=require('../../conf/db'),
    Schema=mongoose.Schema;
var BangBangUserSkillModel=require('./BangBangUserSkillSchema');
var SkillIdSchema=new Schema({
    _id:String,
    next: {type: Number, default: 1}
});
//添加一个方法
SkillIdSchema.statics.increment=function (counter, callback) {
    return this.findByIdAndUpdate(counter, { $inc: { next: 1 } }, {new: true, upsert: true, select: {next: 1}}, callback);
};
module.exports.addBangBangUserSkill=function (req,res) {
    //this.collection.findAndModify(query, sort, doc, options, callback);
    var SkillId=mongoose.model('SkillIdModel',SkillIdSchema);
    SkillId.increment('skillid',function (err,result) {
        if(err)
            throw err;
        else {
            //之所以要在这里进行插入操作，是因为nodejs单线程异步的特点导致了计算id操作在插入之后进行，从而不能获得id
            var BangBangUserSkill = new BangBangUserSkillModel({
                skillId: result.next,
                skillName:req.body.skillname,
                skillType:req.body.skilltype
            });
            BangBangUserSkill.save(function (err) {
                if(err)
                    throw err;
                else
                    res.json("新增技能成功！");
            });
        }
    });
};