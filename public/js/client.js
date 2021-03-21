`use strict`



      fetch('http://localhost:3000/server')
     
     .then(response => response.json())
     
     .then(data => console.log(data)) 
    
      
      .then(function(data){
        console.log(data.newArray);
      })

      .then(function(jsonData){
        console.log(newArray)
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

     

      // let someHTML = "";
      
      // for (let i = 0; i < newArray.length; i++) {
      //   someHTML += `
      //   <img src='${newArray[i].fileName}' alt='my image'>
      //   <a href="${newArray[i].attribution.url}">Some Text</a>`;
      // }
      // // newArray.forEach(function(image){
      // //   // someHTML = someHTML +``;  
      // //   someHTML += `
      // //   <img src='${image.fileName}' alt='my image'>
      // //   <a href="${image.attribution.url}">Some Text</a>`;
      // // });
      //   document.querySelector('.gallery').innerHTML = someHTML;



        

