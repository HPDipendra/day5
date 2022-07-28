import express from "express";

import mysql from "mysql2";



const app= express();

app.use(express.json())
let connection;


// app.get('/work/add', (req,res)=>
// {

// console.log(req.query);
// const{id , userName , password} = req.query;
// connection.query(
//     `INSERT INTO work(id, name, password) VALUES ( '${id}' ,'${userName}', '${password}')`, (err,results,fields)=>{
//         console.log(results);
       
//     });


//     connection.query(
//         'select * from work',(err,results,fields)=>{
//             console.log(results);
         
//         }
//         ); 

// });


app.post('/work/add', (req,res)=>{

    
    

    console.log(req.body);
  
    //const{ id , userName , password} = req.body;
    const data=req.body


    connection.query(
        `INSERT INTO work(id, name, password) VALUES ( '${data.id}' ,'${data.userName}', '${data.password}')`, (err,results,fields)=>{
          if(err) throw err;
          console.log(results);
          if(results.affectedRows===1)
          res.status(200).json({success:true, message : 'data saved succesfully'})
          else
          res.status(400).json({success:'false',message : 'wrong request'})

        });

        
    connection.query(
        'select * from work',(err,results,fields)=>{
            console.log(results);
         
        }
        ); 
    


})



app.post('/work/delete', (req,res)=>{
  
        const data = req.body;
        console.log(data);

        connection.query(`delete from work where id= ${data.id}`,(err,result,fields)=>{
            if(err) throw err;
            console.log(result);
            if(result.affectedRows===1)
            res.status(200).json({success:true, message : 'data deleted succesfully'})
            else
            res.status(400).json({success:'false',message : 'wrong request'})

        });
  
})




connection = mysql.createConnection({
    host :"localhost",
    user :"root",
    password:"dipendra@1",
    database:"practice"
}) 


 



connection.query(
    'select * from demo',(err,results,fields)=>{
        // console.log(results);
     
    }
    );

app.listen(5000,()=>
{
  
    console.log("hello there");
})