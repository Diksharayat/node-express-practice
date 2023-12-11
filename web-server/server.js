const http =require("http");
const fs=require("fs");

// create server
 const server = http.createServer();

//  listen to server
server.listen('8000',console.log("server is running"));
