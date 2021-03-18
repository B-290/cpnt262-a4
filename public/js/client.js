const newArray = require("../../data/gallery");

fetch ('http://localhost:3000/routes/api/v0')
      
      .then (function(response){
        throw new console.error('not-found');

      return response.json();  
      })
      
      .then(function(data){
        console.log(data);
      })

      .then(function(jsonData){
        console.log(newArray)
      })

      .catch (function(err){
        console.log(err);
      });


  
// let output = '';

// newImage.forEach(function(newImage){
//   output = output +``;  
//    someHTML += `
//    <img src='${image.fileName}' alt='my image'>
//    <a href="${image.attribution.url}">Some Text</a>`;
//  });
 
  //document.querySelector('.table').innerHTML = output;
  newArray.forEach(function(image){
      someHTML = someHTML +``;  
      someHTML += `
      <img src='${image.fileName}' alt='my image'>
      <a href="${image.attribution.url}">Some Text</a>`;
    });
    
    document.querySelector('.table').innerHTML = output;