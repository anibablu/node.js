var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end ('Hello Anil !');
 
	
}).listen(8080);
console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
        var logger = require ('./logger');
console.log(logger)
console.log(logger.log)
        logger.log('message')

//using node module
    //****path moduel//

const path = require('path');
var pathObj= path.parse(__filename);
console.log(pathObj)

    //*****/os module//
const os = require('os');

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)
     //*****/File System module//
//synchronous
    const fs = require('fs');
    const files = fs.readdirSync('./')
    console.log(files);
//asynchronous
    fs.readdir('./', (err,files)=>{
        if (err) console.log('Error', err)
        else console.log('Result', files)
    })
    //*****/Events module//
const EventEmitter = require('events'); //EventEmitter is a class
const emitter = new EventEmitter(); //creating instant of class as object
//Register a listener
emitter.on('messageLogged',(arg)=>{//e ,eventArg
console.log('Listener called',arg)
})
//Raise an event
emitter.emit('messageLogged',{id:1,url:"http://"})
//excersice of logging event

//Raise : logging(data:message)
emitter.on('logging',(e)=>{
    console.log('logging',e)
})
emitter.emit('logging',{data:'message'})
