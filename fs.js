var http =require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    fs.readFile('text.txt',(err,data)=>{
        res.write(data);
        res.end();
        console.log("server.running");
     })
}).listen(8083)