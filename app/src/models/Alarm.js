"use strict";
/*
User은 해당 데이터를 가지고 검증 및 조작하는 역할
*/
const AlarmStorage=require("./AlarmStorage");
class Alarm{
    constructor(body){
        this.body=body;
    }

    async getAlarm(){
        const client =this.body
        
        try{
        const {id}= await AlarmStorage.getAlarmInfo(client.id);
        if(id){
            if(id===client.id){
                return {success : true};
            }
            return {success:true,msg:"추가한 알람이 없습니다."};
        }
        return {success:false,msg:"존재하지 않는 아이디입니다."};
        }catch(err){
            return {success:false,msg:err};
        }
    }
    async addAlarm(){
        const client = this.body;
        try{
            const response = await AlarmStorage.alarmSave(client);
            return response;
        }catch(err){
            return {success : false, msg:err};
        }
    }


}

module.exports=Alarm