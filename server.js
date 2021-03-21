  
const path = require('path');
const express = require('express');
const app = express();
const newArray = require('./data/gallery.js');


const { response } = require('express');
const { request } = require('http');
const router = express.Router();

const PORT = process.env.PORT || 3000;
const http = require("http");

const server = http.createServer(function(request, response) {

  
  response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});  

  let newArray = { id: 11, fileName: "img4.jpg", source: "Lorem picsum" };

  let data = JSON.stringify(newArray);

  response.end(data);
});

server.listen(3000, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname,'./public')));

app.use(function(request, response) {
  response.send('newArray');
  
})

app.get('/',(req, res) => {
 res.json({newArray});
})

console.log(newArray)   
console.log(request(URL));
console.log(response);


app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


