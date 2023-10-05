const mysql = require('../database');

exports.controller =( req,res)=>{
//write logic here 
const {u_username , u_password} = req.body;
const query = `select * from employee where username = ? and password = ?`;
mysql.query(query , [u_username , u_password],(err , res) =>{
    if(err) {
        res.status(500).json({error:"doesnot exit"})
    }else{
        if(res.length > 0){
            const user = res[0];
            console.log(user);
        }
    }
})
res.send("controller is here");
}