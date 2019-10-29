var app = require("express")();
var http = require("http").createServer(app);

app.get("/",function(req,res){
  res.send("<h1>Hellou</h1>");
});

http.listen(3000,function(){
  console.log("listening on *:3000");
});