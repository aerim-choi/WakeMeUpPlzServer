"use strict"

const Alarm = require("../../models/Alarm");
const User =require("../../models/User");
const output ={
    home : (req,res)=>{
        res.render("home/index");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
    register:(req,res)=>{
        res.render("home/register");
    },

    alarm:(req,res)=>{
        res.render("home/alarm");
    },
    alarmRegister:(req,res)=>{
        res.render("home/alarmRegister");
    }
}


const process={
    login:async (req,res)=>{
        const user= new User(req.body);
        const response=await user.login();
        return res.json(response);
    },
    register:async (req,res)=>{
        const user= new User(req.body);
        const response=await user.register();
        return res.json(response);
    },
    getAlarm:async(req,res)=>{
        const alarm= new Alarm(req.body);
        const response=await alarm.getAlarm();
        return res.json(response);
    },
    addAlarm:async(req,res)=>{
        const alarm= new Alarm(req.body);
        const response=await alarm.addAlarm();
        return res.json(response);
    }


};

module.exports={
    output,
    process,
};