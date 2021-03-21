`use strict`



      fetch('http://localhost:3000/routes/api')
     
     .then(response => response.json())
     
     .then(data => console.log(data)) 
    
      
      .then(function(data){
        console.log(data.newArray);
      })

     
      .then(function(newArray){
        
        newArray.forEach(function(image){
        someHTML = someHTML +``;  
        someHTML += `
        <img src='${image.fileName}' alt='my image'>
        <a href="${image.attribution.url}">Some Text</a>`;
      });
        document.querySelector('#table').innerHTML = someHTML;

    });
       
    

      

     

   
