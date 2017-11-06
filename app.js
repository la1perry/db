// require('console.table');

// const promise=require('promise');

const mysql=require('mysql');

let connection=mysql.createConnection({
    host: '********.cmwfjedpl1zq.us-west-2.rds.amazonaws.com',
    user:'root',
    password:'',
    database:'Ecommerce_Platform',
    port:'3306',
    charset:'utf8'
})
connection.connect(function(err){
    if(err)throw err;
    console.log('connected');
})
connection.query('SELECT * FROM employees', function(err, rows, fields){
    if(err) throw err;
    console.log(rows);
});

// const mysql=require('mysql');
// let connection=mysql.createConnection({
//     host: '********.cmwfjedpl1zq.us-west-2.rds.amazonaws.com',
//     user:'root',
//     password:'',
//     database:'Ecommerce_Platform',
//     port:'3306',
//     // charset:'utf8'
// })

// const mysql=require('mysql-bluebird');
// const promise=require('bluebird');

// let connection=new mysql({
//     host: '********.cmwfjedpl1zq.us-west-2.rds.amazonaws.com',
//     user:'root',
//     password:'',
//     database:'Ecommerce_Platform',
//     port:'3306',
//     // charset:'utf8'
// })

// promise.resolve()
// .then(function(){
//     return connection.start();
// }).then(function(){
//     return connection.query('SELECT * FROM Employee');
// }).then(function(res){
//     console.log(res);
// });

// const mysql=require('promise-mysql');
// mysql.createConnection({
//     host: '********.cmwfjedpl1zq.us-west-2.rds.amazonaws.com',
//     user:'root',
//     password:'',
//     database:'Ecommerce_Platform',
//     port:'3306',
//     // charset:'utf8'
// }).then(function(conn){
//     let result=conn.query('SELECT * FROM Employee');
//     conn.end();
//     return result;
// }).then(function(rows){
//     console.log(rows);
// })







// var Q=require('q');

// const pool=mysql.createPool({
//     host: '********.cmwfjedpl1zq.us-west-2.rds.amazonaws.com',
//     user:'root',
//     password:'',
//     database:'Ecommerce_Platform',
//     port:'3306',
//     // charset:'utf8'
// });

// function getData(){
//     return Q.promised(function(resolve,reject){
//        let query='SELECT * FROM Employee WHERE EMP_NUM=?';
//        let params=['102'];
//        query=mysql.format(query,params);

//        pool.getConnection(function(err,connection){
//            if(err){return reject (err);}
//            connection.query(query, function(err,rows){
//                if(err){
//                    return reject(err);
//                }
//                rows.forEach(function(row){
//                    console.log(row);
//                })
//                connection.release();
//                resolve();
//            })
//        })
//     })
// }

// function getData(ids, cb){
// let data=[];
// let pending=ids.length;
// for(var i in ids){
//     pool.query('SELECT * FROM Empoyee WHERE EMP_NUM=?',[ids[i]], function(err,result){
//         data.push(JSON.stringify(result));
//         if(0=== --pending){
//             cb(data);
//         }
//     });
// }
// }
// let ids=['102'];
// getData(ids, function(data){
//     console.log(data);
// })


// function getData(callback){
    
//     connection.connect();
//     let query1=('SELECT * FROM Employee');
    
//     connection.query(query1,function(err, records){
//     if(err){
//         console.error(err);
//         console.log('error'+ err);
//         return
//     }
//     else if (records){
//         const res=records.rows;
//         console.log(res);
//         callback(res);
    
//     }
//     })
//     }
    
//     getData(function(result){
//         console.log(result)
//     })


// function getSQL(callback){
// let json='';
// let query1='SELECT * FROM Employee';
// connection.query(query1, function(err, rows){
//     return callback(err, rows);
// })
// }
// getSQL();

//     if(err) throw err;

//  connection.query("SELECT * FROM Employee", function(err, result, fields){
// if (err) throw err;
// console.log(result)
//  });
   




// const sql='SELECT * FROM Employee';
// connection.connect();
// connection.query(sql, function(err, results){
//     if(err)throw err;
//     console.log((results[0]);
// })




// function getData (data, promise){

// connection.connect()
//  connection.query(sql, function(err, results, fields){
// if(err){
//     console.log(error);
//     return
// }else{
//     var rows=JSON.parse(JSON.stringify(results))
//     console.log(results);
//     promise.resolve(results);
// }
//  })

// }
// getData(function(err,results){
//     if(err){console.log(error)}else{
//         console.log(results);
//     }
// })

// pool.get('/', function(req,res,callback){
// let content={};
// mysql.pool.query('SELECT * FROM Employee', function(err, rows, fields){
//     if(err){
//         callback(err);
//         return;
//     }
//     content.results=JSON.stringify(rows);
//     res.render('null', content);
// });

// });

// connection.connect(function(err){
// if(err) throw err;
// console.log('connected');
// const query1='Insert into Employee Values[102,Osho,Angmar,09-09-09,504]';
// connection.query(query1, function(err, result){
//     if(err)throw err;
//     console.log('done');
// })

// })


// function getData(){
//     return new Promise(find);
//     function find(resolve,reject){
// pool.getConnection(function(err, con){
//     if(err){return reject(err)}else{
//         con.query('SELECT * FROM Employee', function(err, rows){
//             if(err){return reject(err)}else{
//                 con.release();
//                 return resolve(rows);
//             }
//             })
//         }
//     })
// }
//     }

// getData().then(function(rows){
//     console.log(rows);

    
// }).catch(function(err){
//     console.log(err);
// }).done(function(){
//     pool.end()
// });


// const query1='SELECT * FROM Employee';

// function getData(query, callback){
//     connection.connect();
    
// connection.query(query, function (err, rows){
// if(err){ callback(err)}else{
// callback(null, rows);

// }
// });
// }

// getData(query1,function(err, results){
//     console.log(results);
// })

// connection.connect();
// let query=connection.query('SELECT * FROM Employee');
// query
// .on('error', function (err){
// if(err){throw err;}
// })
// .on('result', function(row){
//     connection.pause();
//     getData(row);
    

// })
// .on('end', function(row){

// });
// connection.end();

// function getDate(rows){
//     let data=rows;
//     console.log(data);
// }

// getData=function(callback){
// connection.connect(function(err){
// if(err){throw err;}
// else{

//     query1='SELECT * FROM Employee';
//     connection.query(query1,function(err, rows, result){
// if(err){throw err;}else{
//     let data=rows;
//     console.log(data);
//     callback(data);
    
// }
//     });
//     connection.end(function(err){
//         if(err){throw err;}
//     });
// }

// });
// }
// getData();

// let getData=function(callback){
//     connection.connect();
    
//     const query1='SELECT * FROM Employee';

// connection.query(query1, function(err, rows){
//     if(err) {throw err;}
//     else{ return callback(rows[0]);}
// });
// }


// getData(function(res){
//     let data=res
//     console.log(data);
// });




// connection.connect();

// connection.query('SELECT * FROM Employee', function(err, rows){
//     if(err) throw err;
   
    
// })

// const query=connection.query('SELECT * FROM Employee');

// query.on('error', function(err){
//     throw err;
// })
// query.on('result', function(row){
// console.log(row);
// });

// connection.end();

// function run (sql){
// connection.query( function(err, rows, fields){
// if(err) throw err;
// console.log(rows);
// })
// }

// run(SELECT * FROM Employee);

// connection.query('SELECT * FROM Employee', function(err,records,fields){
//     if(err) throw err;

//     console.log(records);
    
// });

    // else{
    //     for (let i in rows){
    //         let info=rows[i];
    //         console.log(info);
    //     }
    // }
// })






// class Database{
//     constructor(config){
//         this.connection=mysql.createConnection(config);
//     }
// query(sql, args){
//     return new Promise((resolve,reject)=>{
//         this.connection.query(sql,args,(err, rows)=>{
//             if(err) return reject (err);
//             resolve(rows);
//         });
//     })
// }
//     close() {
//         return new Promise((resolve,reject)=>{
//             this.connection.end(err=>{
//                 if(err)return reject (err);
//                 resolve();
//             })
//         })
//     }
// }

// Database.query('SELECT * FROM Employee').then(rows=>{
//     console.log(rows);
// })

// connection.connect(function(err){
// if(err){
//     return console.error('error: ', err.message);
// }
// console.log('connected to mysql server');
// });




