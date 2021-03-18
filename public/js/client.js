fetch ('http://localhost:3000/api/data/gallery')
      
      .then (function(response){
        throw new console.error('not-found');

      return response.json();  
      })
      
      .then(function(data){
        console.log(data);
      })

      .catch (function(err){
        console.log(err);
      });

      app.set('view engine','ejs')

const newArray = require('../v0/gallery.js');
  
let output = '';

newArray.forEach(function(newImage){
  output = output +``;  
   someHTML += `
   <img src='${image.fileName}' alt='my image'>
   <a href="${image.attribution.url}">Some Text</a>`;
 });
 
  document.querySelector('.table').innerHTML = output;
  //newArray.forEach(function(image){
    //   // someHTML = someHTML +``;  
    //   someHTML += `
    //   <img src='${image.fileName}' alt='my image'>
    //   <a href="${image.attribution.url}">Some Text</a>`;
    // });
