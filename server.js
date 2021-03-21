  
const path = require('path');
const express = require('express');
const app = express();
const newArray = require('./data/gallery.js');
const { response } = require('express');
const router = express.Router()

app.use(express.static(path.join(__dirname,'./public')));

app.use(function(request, response) {
  response.send('newArray');
  
})

app.get('/',(req, res) => {
 res.json({newArray});
})

console.log(newArray)   
console.log(require);
console.log(response);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


