//var url='http://mylogger.io/log';
/*function log(message)
{
    console.log(message);


}*/
//module.exports.log=log;
//module.exports.endpoint=url;
//module.exports=log;

const EventEmitter=require('events');
class Logger extends EventEmitter{

    log(message){

        console.log(message);
        this.emit('messageLogged',{id:1,url:'http://'});
    }


}
module.exports=log;