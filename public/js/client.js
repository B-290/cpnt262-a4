`use strict`
//frontend javascript to display the image object json string into a browser
    const URL = "http://localhost:3000"

   fetch( URL )

      .then(function(response) {
         console.log(response);
        return response.json();
   })

      .then(function(data){
  
         console.log(data);
        
   })
  //for each loop to go through all the elements in the json string
       
        data.forEach(function(image){
        
        someHTML = someHTML +``;  
        someHTML += `
        <img src='${image.fileName}' alt='my image'>
        <a href="${image.attribution.url}">Some Text</a>`;
//template variables to get the images to index.html file which is hoisting
   });
        document.querySelector('#table').innerHTML = someHTML;


       
    

      

     

   
