const path = require('path');
const express = require('express');
const app = express();
const newArray = require('./data/gallery.js');

app.use(express.static(path.join(__dirname,'./public')));

app.use(function(request, response) {
  response.send('newArray');
  
})

app.get('/',(req, res) => {
 res.send(newArray);
})

app.set('view engine','ejs')

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

