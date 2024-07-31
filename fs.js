1)
/***HTTP***/


2)
/***filesystem***/
file name=fs.js
 var http =require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    fs.readFile('text.txt',(err,data)=>{
        res.write(data);
        res.end();
        console.log("server.running");
     })
}).listen(8083)  
output=welcome!!
note:we have to read a file through server already created in you system

3)
/***append***/
file name=fs.js
var http =require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    fs.appendFile('text.txt','Thank you',(err,data)=>{
        res.write(data);
        res.end();
        console.log("server.running");
     })
}).listen(8083)
output=welcome!!Thank you
note:using append method we have to add a text on a text.txt file using fs.js

4)
/***fileWrite***/
file name=fs.js
var http =require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    fs.writeFile('text.txt','moyee moyeee',(err,data)=>{
        res.write(data);
        res.end();
        console.log("server.running");
     })
}).listen(8081)
output=moyee moyee
note:we  have to entire change the text into new text using fs.js
