
const express = require('express');
const { request } = require('http');
const newArray = require('../../data/gallery');

const router = express.Router()

router.get('/', (request, response) => {
  console.log(request)

  response.render('', {newArray: ''});
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

console.log(request)

module.exports = router