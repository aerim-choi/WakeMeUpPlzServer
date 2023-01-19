"use strict"

const logger =require("../../config/logger");
const Alarm = require("../../models/Alarm");
const User =require("../../models/User");
const output ={
    home : (req,res)=>{
        logger.info(`GET /304 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    login : (req,res)=>{
        logger.info(`GET /304 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    register:(req,res)=>{
        logger.info(`GET /304 "회원가입 화면으로 이동"`);
        res.render("home/register");
    },
    alarm:(req,res)=>{
        res.render("home/alarm");
    },
    alarmRegister:(req,res)=>{
        res.render("home/alarmRegister");
    },
    alarmUpdate:(req,res)=>{
        res.render("home/alarmUpdate");
    },
    alarmDelete:(req,res)=>{
        res.render("home/alarmDelete");
    },
}


const process={
    login:async (req,res)=>{
        const user= new User(req.body);
        const response=await user.login();
        const url ={
            method:"POST",
            path:"/login",
            status: response.arr?400:200,
        };
        log(response,url);
        return res.status(url.status).json(response);
    },
    register:async (req,res)=>{
        const user= new User(req.body);
        const response=await user.register();
        const url ={
            method:"POST",
            path:"/register",
            status: response.arr?409:201,
        };
        log(response,url);
        return res.status(url.status).json(response);
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
    },
    updateAlarm:async(req,res)=>{
        const alarm= new Alarm(req.body);
        const response=await alarm.updateAlarm();
        return res.json(response);
    }
    ,
    deleteAlarm:async(req,res)=>{
        const alarm= new Alarm(req.body);
        const response=await alarm.deleteAlarm();
        return res.json(response);
    }


};
const log =(response,url)=>{
    if(response.err){
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success},${response.err}"`
        )
    }
    else
        logger.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg||""}"`
        );
}

module.exports={
    output,
    process,
};