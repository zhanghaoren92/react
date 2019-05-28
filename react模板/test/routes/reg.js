let express = require('express');
let router = express.Router();


//客户端使用

let mongodb = require('mongodb');

const MongoClient = require('mongodb').MongoClient;//创建连接

// 库地址
const url = 'mongodb://127.0.0.1:27017';
 
// 库名
const dbName = '2018-11-01';

router.get('/',(req,res)=>{

  let username=req.query.username;
  let password=req.query.password;

  //操作库
  // connect 连接库服务
  MongoClient.connect(url, function(err, client) {//打开连接
    //err  连接失败
    //client 返回连接对象
    const db = client.db(dbName);// db 当前库  2018-9-29  连接到库

    const user = db.collection('login'); //连接集合(表)
    console.log(username);
    console.log(password);

            user.insertOne({
                user:username,
                pass:password,
            }, 
            function(err, res1) {
                // console.log("result",res1)
               res.send({error:0,msg:'成功',data:{a:'用户信息'}})
            
            })
        
      client.close();//连接关闭
      
    })
   
  });


module.exports=router;
