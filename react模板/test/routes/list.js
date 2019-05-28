
var express = require('express');
var router = express.Router();

let mongodb = require('mongodb');

const MongoClient = require('mongodb').MongoClient;//创建连接
const url = 'mongodb://127.0.0.1:27017';
const dbName = '2018-11-01';

router.get('/', function(req, res){
    console.log("news服务",req.headers.origin);
  let start=req.query.start-0;
  let count=req.query.count-0;

MongoClient.connect(url,function(err,client){//打开连接
 
  const db = client.db(dbName);//db 是当前库 2018-10-05 连接到库

  const user = db.collection('list');//连接集合（表）

  user.find({},{
     limit:count,
     skip:start*count,
    }).toArray((err,data)=>{
      // console.log('err',err);
      // console.log('data',data);
      res.send(data);//返还给前段的数据

      client.close();//连接关闭
    });

});

})
module.exports = router;