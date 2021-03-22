  
const path = require('path');
const express = require('express');
const app = express();
const newArray = require('./data/gallery');
const { response } = require('express');
const router = express.Router()

//declare variables
app.use(express.static(path.join(__dirname,'./public')));
//use middle-ware to join with ./public
app.use(function(request, response) {
  response.send(newArray);
  //send the array to respond with json lateron
})

app.get('/',(req, res) => {
 res.json({newArray});
})

//stringify method to convert the array to json string
jsonArrData = JSON.stringify(newArray)

console.log(jsonArrData)

console.log(typeof jsonArrData === 'string')


   
console.log(require);
console.log(response);

app.use(function(req,res){
  res.status(404).end();
  response.send('custom-404')
})

//send to localhost:3000 because every app does a GET request at a beginning of every session 

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


