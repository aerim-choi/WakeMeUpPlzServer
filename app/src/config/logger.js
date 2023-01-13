const { createLogger,transports,format } = require('winston');
const{combine, timestamp,printf,label,simple,colorize}=format;

const printFormat=printf(({timestamp,label,level,message})=>{
    return `${timestamp} [${label}] ${level} : ${message}`
})
const printLogFormat =  {
    file:combine(
        label({//로그들이 어떤 프로젝트인지 알 수 있게 label로 확인
            label:"백엔드 맛보기",
        }),
        timestamp({
            format:"YYYY-MM-DD HH:mm:dd"
        }),
        printFormat //출력포맷x
    ),
    console:combine(
        colorize(),
        simple()
    ),

    };

const opts={
    file:new transports.File({
        filename:"access.log",
        dirname:"./logs",
        level:"info",
        format : printLogFormat.file,

    }),
    console:new transports.Console({
        filename:"access.log",
        dirname:"./logs",
        level:"info",
        format : printLogFormat.console,
    })
}


const logger = createLogger({
    transports:[opts.file],
});

if(process.env.NODE_ENV!=="production"){
    logger.add(opts.console);
}

logger.stream={
    write:(message)=>logger.info(message),
}

module.exports=logger;