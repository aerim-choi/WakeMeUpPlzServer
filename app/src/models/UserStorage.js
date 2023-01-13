"use strict"
const db=require("../config/db");
/*
UserStorage에서는 DB를 CRUD(생성,읽기,수정,삭제)역할
*/
class UserStorage {

    static getUserInfo(id) {
        return new Promise((resolve,reject)=>{
            const query = "SELECT * FROM abc WHERE id =?;";
            db.query(query,[id],(err,data)=>{
                if(err)reject(`${err}`);
                //console.log(data[0]);
                else resolve(data[0]);
            });
        });
        
    }

    static async save(userInfo) {
        return new Promise((resolve,reject)=>{
            const query = "INSERT INTO abc(id,name,psword) VALUES(?,?,?);" ;
            db.query(query,
                [userInfo.id,userInfo.name,userInfo.psword],
                (err)=>{
                if(err)reject(`${err}`);
                else resolve ({success:true});
            });
        });
    }

}
module.exports = UserStorage;