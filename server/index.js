var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(path.join( __dirname+'/../build')));

app.get('/',function(req,res){
  console.log(path.join( __dirname+'/../build/index.html'));
  res.sendFile(path.join( __dirname +'/../build/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.listen(3000);
//console.log(path.join( __dirname+'/../build/index.html'));
console.log("Running at Port 3000");