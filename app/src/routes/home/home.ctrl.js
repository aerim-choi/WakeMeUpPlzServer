"use strict"

const logger =require("../../config/logger");
const Alarm = require("../../models/Alarm");
const User =require("../../models/User");
const output ={
    home : (req,res)=>{
        logger.info(`GET /200 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    login : (req,res)=>{
        logger.info(`GET /200 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    register:(req,res)=>{
        logger.info(`GET /200 "회원가입 화면으로 이동"`);
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
        if(response.err){
            logger.error(
                `POST /login 200 Response: "success: ${response.success},${response.err}"`
            )
        }
        else
            logger.info(
                `POST /login 200 Response: "success: ${response.success},msg:${response.msg}"`
            );
        return res.json(response);
    },
    register:async (req,res)=>{
        const user= new User(req.body);
        const response=await user.register();
        if(response.err){
            logger.error(
                `POST /login 200 Response: "success: ${response.success},${response.err}"`
            )
        }
        else
            logger.info(
                `POST /register 200 Response: "success: ${response.success},msg:${response.msg}"`
            );
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

module.exports={
    output,
    process,
};