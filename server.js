var http =require('http');
http.createServer((req,res)=>{
    res.write(req.url);
    res.end();
    console.log('server loading')
}).listen(8081)