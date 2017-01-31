var mongoose=require('mongoose'),
DB_URL="mongodb://localhost/sos";
//创建数据库连接
mongoose.connect(DB_URL,function (err) {
    if(!err)
        console.log("connect success!");
    else
        throw err;
});
module.exports=mongoose;
