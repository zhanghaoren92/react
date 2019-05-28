var express = require('express');
var router = express.Router();

//客户端使用

let mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;//创建连接
const url = 'mongodb://127.0.0.1:27017';
const dbName = '2018-11-01';

router.get('/', function(req, res){
// router.get("/",(req,res)=>{
  let data1 = req.query;
  let user = data1.username;
  let pass = data1.password;
  console.log(data1)
  // 连接库服务
  MongoClient.connect(url, function(err, client) {
      let db = client.db(dbName);   //当前库
      let user1 = db.collection('login');

      user1.find({
            user:user,
            pass:pass          
          }).toArray(function(err,data){
                if(data.length>0){
                    res.send("1")
                }else {
                    res.send("0")
                }               
            });                   
      client.close()
  });

})
module.exports = router;