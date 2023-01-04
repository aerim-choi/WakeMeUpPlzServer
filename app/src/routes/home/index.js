"use strict"

const express =require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");


router.get("/",ctrl.output.home);
router.get("/login",ctrl.output.login);
router.get("/register",ctrl.output.register);
router.get("/alarm",ctrl.output.alarm);
router.get("/alarmRegister",ctrl.output.alarmRegister);
router.get("/alarmUpdate",ctrl.output.alarmUpdate);
router.get("/alarmDelete",ctrl.output.alarmDelete);

router.post("/login",ctrl.process.login);
router.post("/register",ctrl.process.register);
router.post("/alarm",ctrl.process.getAlarm);
router.post("/alarmRegister",ctrl.process.addAlarm);
router.post("/alarmUpdate",ctrl.process.updateAlarm);
router.post("/alarmDelete",ctrl.process.deleteAlarm);


module.exports=router;