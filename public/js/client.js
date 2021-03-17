fetch ('http://localhost:3000/api/vo/gallery')
      
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


  
let someHTML = `<img>\n`;

newArray.forEach(function(image){
  someHTML = someHTML +``;  
   someHTML += `
   <img src='${image.fileName}' alt='my image'>
   <a href="${image.attribution.url}">Some Text</a>`;
 });
 
  document.querySelector('.gallery').innerHTML = someHTML;

