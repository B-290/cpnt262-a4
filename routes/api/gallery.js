
const express = require('express');
const newArray = require('../../data/gallery');
const definitions = require('../data/definitions')


const router = express.Router()

router.get('/', (request, response) => {
  console.log(request)

  response.render('', {alt: ''});
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

module.exports = router