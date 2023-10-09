const { Socket } = require("socket.io");

const io = require("socket.io" )();
const socketapi = {
    io: io
};

var allusersid =[];
var allusersname =[];

io.on( "connection", function( socket ) {
io.emit("onlineuser", allusersid.length)
    socket.on("disconnect", function(){
        allusersid.splice(allusersid.indexOf(socket.id),1)
        allusersname.splice(allusersid.indexOf(socket.id),1)
        io.emit("onlineuser", allusersid.length)
  
    })
    socket.on("name", function(data){
         allusersname.push(data)
        allusersid.push(Socket.id)
       io.emit("onlineuser", allusersid.length)
  
    })
    
    socket.on("msg", function(data){
      io.emit("msg", data)
 })
    });


module.exports = socketapi;