import http from 'http'
import fs from 'fs'
import path from 'path'
import { data } from './data.js'
const server =  http.createServer((req, res)=>{
    if(req.url=="/"&& req.method =="GET"){
        res.writeHead(201,{"content-type":"application/json"})
        res.end(
            JSON.stringify(data))
    }
    else if(req.url=="/home"&&req.method =="GET"){
        res.writeHead(201,{"content-type":"application/json"});
        res.end(JSON.stringify({
            id:1,
            name:"home page"
        }));        
    }
    else if(req.url=="/user"&&req.method=="GET"){
        res.writeHead(201,{"content-type":"applocation/json"});
        res.end(JSON.stringify({
            id:3,
            name:"user"
        }));
    }
    else if(req.url=="/home"&&req.method =="POST"){
        res.writeHead(201,{"content-type":"application/json"});
        res.end(JSON.stringify({
            id:4,
            name:"Post-home"
        }))
    }
    else{
        res.writeHead(404,{"content-type":"application/json"})
        res.end(
            JSON.stringify({
            status:false,
            message:"page not found !"
        })
        );
    };
   
})
 server.listen(4000,()=>{
        console.log(" server started successfully !! on port 4000")
    })

