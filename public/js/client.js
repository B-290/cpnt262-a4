`use strict`



    const URL = "http://localhost:3000"
//Calling fetch on that URL. This will instantly return a promise (if URL is valid databse).
   fetch( URL )
//Then, once the response has been returned, convert the JSON string to an object
      .then(function(response) {
         console.log(response);
        return response.json();
})

      .then(function(data) {
  // Any code that needs `data` should be in this code block.
         console.log(data);
  
  
        data.forEach(function(image){
      
         console.log(image);
       
        data.forEach(function(image){
        
        someHTML = someHTML +``;  
        someHTML += `
        <img src='${image.fileName}' alt='my image'>
        <a href="${image.attribution.url}">Some Text</a>`;

  
      });
        document.querySelector('#table').innerHTML = someHTML;

    });
       
    

      

     

   
