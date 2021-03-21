
const express = require('express');
const newArray = require('../../data/gallery');

const router = express.Router()

router.get('/', (request, response) => {
  console.log(request)

  response.render('', {fileName: ''});
})

router.get('/:newArray-fileName', (request, response) => {
  
  newArray = newArray.find(function(item){
    return request.params.filename === item.fileName
  })

  response.render('newArray-filename', {
    alt: '',
  title: '',
  });
})

console.log(require)

module.exports = router