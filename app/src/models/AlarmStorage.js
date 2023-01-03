"use strict"
const e = require("express");
const db=require("../config/db");
/*
AlarmStorage에서는 DB를 CRUD(생성,읽기,수정,삭제)역할
*/
class AlarmStorage {
    static dataList;
    static async getDataList(){
        console.log("2");  
        return this.dataList;
         
    }
    static async getAlarmInfo(id) {
        return new Promise((resolve,reject)=>{
            const query = "select alarmNum,title,helper,dorN,isActivated,isHelperActivated,ringTone,id,dates from alarms where id=?;";
            const query2 = "select Sun,Mon,Tue,Wed,Thur,Fri,Sat from dates  where alarmNum=?;";
            
            this.dataList=[];
            db.query(query,[id],(err,data)=>{
                if(err)reject(`${err}`);

                for(var element of data){
                    console.log(element);
                    db.query(query2,[element.alarmNum],(err,data2)=>{
                        if(err)reject(`${err}`);
                        element.dates=data2[0];
                        console.log(element);
                        this.dataList.push(element);
                        
                    });
                }

            });
            console.log("1");  
            resolve(this.getDataList());
            console.log("4");        
        });
        
    }
    


    static async alarmSave(alarmInfo) {
        return new Promise((resolve,reject)=>{
            const query = "INSERT INTO alarms(alarmNum,title, helper,dorN,isActivited,isHelperActivated,ringTone,alarmTime,id) VALUES(?,?,?,?,?,?,?,?,?);" ;
            const query2 = "INSERT INTO dates(Sun,Mon,Tue,Wed,Thur,Fri,Sat,alarmNum) VALUES(?,?,?,?,?,?,?,?)";
            db.query(query,
                [alarmInfo.alarmNum,alarmInfo.title,alarmInfo.helper,alarmInfo.dorN,alarmInfo.isActivited,alarmInfo.isHelperActivated,alarmInfo.ringTone,alarmInfo.alarmTime,alarmInfo.id],
                (err)=>{
                if(err)reject(`${err}`);
                resolve ({sucess:true});
            });
            db.query2(query2,[alarmInfo.Sun,alarmInfo.Mon,alarmInfo.Tue,alarmInfo.Wed,alarmInfo.Thur,alarmInfo.Sat,alarmInfo.alarmNum],
                (err)=>{
                    if(err)reject(`${err}`);
                    resolve({sucess:true});
            });
        });
    }

}
module.exports = AlarmStorage;