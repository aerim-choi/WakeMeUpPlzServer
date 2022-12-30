"use strict"

const UserStorage =require("../../models/UserStorage");
const output ={
    home : (req,res)=>{
        res.render("home/index");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
}

//로그인 인증 process
const process={
    login:(req,res)=>{
        const id =req.body.id;
        const psword = req.body.psword; 
        
        const users = UserStorage.getUsers("id","psword");
        const response = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx]===psword){
                response.sucess=true;
                return res.json();
            }
        }
        response.sucess=false;
        response.msg="로그인에 실패하셨습니다.";
        return res.json(response);
    },
};

module.exports={
    output,
    process,
};