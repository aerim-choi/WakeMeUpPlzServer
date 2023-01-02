"use strict"
const db=require("../config/db");
/*
AlarmStorage에서는 DB를 CRUD(생성,읽기,수정,삭제)역할
*/
class AlarmStorage {

    static getAlarmInfo(id) {
        return new Promise((resolve,reject)=>{
            const query = "SELECT * FROM alarms WHERE id =?;";
            db.query(query,[id],(err,data)=>{
                if(err)reject(`${err}`);
                console.log(data);
                resolve(data);
            });
        });
        
    }

    static async alarmSave(alarmInfo) {
        return new Promise((resolve,reject)=>{
            const query = "INSERT INTO alarms(alarmNum,alarmTime, alarmDay,title,sound,helper,id) VALUES(?,?,?,?,?,?,?);" ;
            db.query(query,
                [alarmInfo.alarmNum,alarmInfo.Time,alarmInfo.Day,alarmInfo.title,alarmInfo.sound,alarmInfo.helper,alarmInfo.id],
                (err)=>{
                if(err)reject(`${err}`);
                resolve ({sucess:true});
            });
        });
    }

}
module.exports = AlarmStorage;