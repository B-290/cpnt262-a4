const newArray = require("../../data/gallery");

`use strict`



      fetch('http://localhost:3000/routes/api/gallery')
     
      .then(function(response) {
        return response.json();
      })

      console.log(newArray)
      
    
      newArray.forEach(function(item){
        imgTemplate += 
          `<figure>
          <a href="${item.id}">
            <img src="https://picsum.photos/id/${item.id}/250" alt="${item.title}">
          </a>
          <figcaption>Hello ${item.title}!</figcaption>
          </figure>`;
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



        

