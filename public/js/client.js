`use strict`
let myRequest = new Request('http://localhost:3000/newArray')

fetch (myRequest)


      .then (function(response){
          return response.json();

       
      })
      
      .then(function(data){
        console.log(data.newArray);
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