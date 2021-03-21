  
const path = require('path');
const express = require('express');
const app = express();
const newArray = require('./data/gallery');
const { response } = require('express');
const router = express.Router()


app.use(express.static(path.join(__dirname,'./public')));

app.use(function(request, response) {
  response.send('newArray');
  
})

app.get('/',(req, res) => {
 res.json({newArray});
})

jsonArrData = JSON.stringify(newArray)

console.log(jsonArrData)

console.log(typeof jsonArrData === 'string')


   
console.log(require);
console.log(response);



const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


