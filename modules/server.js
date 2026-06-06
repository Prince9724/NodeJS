// import http from  'http';
//   const server = http.createServer((res,req)=>{
//    res.writeHead(200,{"content-type":"text/plain"});
//    res.end("hello from server !! ");
// })
// server.listen(3002,()=>{
//     console.log("Server running at ")
// })

const fs = require("fs")

fs.writeFile("index.html"," ",(err)=>{
 if (err) throw err;
    console.log("file created and written successfully !");

});
