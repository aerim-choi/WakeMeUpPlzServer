"use strict"
const e = require("express");
const db=require("../config/db");
/*
AlarmStorage에서는 DB를 CRUD(생성,읽기,수정,삭제)역할
*/
class AlarmStorage {
    
    static async getDaysInfo(element){
        const query = "select Sun,Mon,Tue,Wed,Thur,Fri,Sat from dates  where alarmNum=?;";
    
        db.query(query,[element.alarmNum],(err,data)=>{
            element.dates=data[0];
            console.log(element);
        })
        
        return element;
    }
    static async getAlarmInfo(id) {
        return new Promise(async (resolve,reject)=>{
            const query = "select alarmNum,title,helper,dorN,isActivated,isHelperActivated,ringTone,alarmTime,id,dates from alarms where id=?;";
            db.query(query,[id], (err,data)=>{
                if(err)reject(`${err}`);
                resolve(data);
            });
        });
           
    };


    static async alarmSave(alarmInfo) {
        return new Promise((resolve,reject)=>{
            const query = "INSERT INTO alarms(alarmNum,title, helper,dorN,isActivated,isHelperActivated,ringTone,alarmTime,id,dates) VALUES(?,?,?,?,?,?,?,?,?,?);" ;
            
            db.query(query,
                [alarmInfo.alarmNum,alarmInfo.title,alarmInfo.helper,alarmInfo.dorN,alarmInfo.isActivated,alarmInfo.isHelperActivated,alarmInfo.ringTone,alarmInfo.alarmTime,alarmInfo.id,alarmInfo.dates],
                (err)=>{
                if(err)reject(`${err}`);
                resolve({success:true});
            });
            
        });
    }

    static async alarmUpdate(alarmInfo){
        return new Promise((resolve,reject)=>{
            const query = "UPDATE alarms SET alarmNum=?,title=?, helper=?,dorN=?,isActivated=?,isHelperActivated=?,ringTone=?,alarmTime=?,id=?,dates=? where id=? and alarmNum=?;" ;
            
            db.query(query,
                [alarmInfo.alarmNum,alarmInfo.title,alarmInfo.helper,alarmInfo.dorN,alarmInfo.isActivated,alarmInfo.isHelperActivated,alarmInfo.ringTone,alarmInfo.alarmTime,alarmInfo.id,alarmInfo.dates,alarmInfo.id,alarmInfo.alarmNum],
                (err)=>{
                if(err)reject(`${err}`);
                resolve({success:true});
            });
            
        });
    }

    static async alarmDelete(alarmInfo){
        return new Promise((resolve,reject)=>{
            const query = "DELETE FROM alarms where id=? and alarmNum=?;" ;
            
            db.query(query,
                [alarmInfo.id,alarmInfo.alarmNum],
                (err)=>{
                if(err)reject(`${err}`);
                resolve({success:true});
            });
            
        });
    }

}
module.exports = AlarmStorage;