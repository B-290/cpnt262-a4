
const express = require('express');
const router = express.Router();
const gallery = ('../../data/gallery.js')

router.get('/gallery', function(request, response){
 response.json(newImage);
});

module.exports = router


// import jsonData from './json.json';

// console.log(jsonData);

// const image = document.querySelector('select');
// const image = document.querySelector('');

// const header = document.querySelector('header');
// const section = document.querySelector('section');

// image.onchange = function() {
//   const verse = verseChoose.value;
//   updateDisplay(verse);
// };

// function updateDisplay(verse) {

//   request.send();

// }

// // newArray.forEach(function(image){
// //   // someHTML = someHTML +``;  
// //   someHTML += `
// //   <img src='${image.fileName}' alt='my image'>
// //   <a href="${image.attribution.url}">Some Text</a>`;
// // });
// verse = verse.replace(" ", "");
// verse = verse.toLowerCase();
// let url = verse + '.txt';

// let request = new XMLHttpRequest();

// request.open('GET', url);

// request.responseType = 'text';

// request.onload = function() {
//   poemDisplay.textContent = request.response;
// };

// request.send();

// updateDisplay('Verse 1');
// verseChoose.value = 'Verse 1';

// let request = new XMLHttpRequest();
// request.open('GET', url);
// request.responseType = 'text';

// request.onload = function() {
//   poemDisplay.textContent = request.response;
// };

// request.send();

// fetch(url).then(function(response) {
//   response.text().then(function(text) {
//     poemDisplay.textContent = text;
//   });
// });
// //TODO: use methods and status-code and end to fire.
// fetch(url).then(function(response) {
//   response.text().then(function(text) {
//     poemDisplay.textContent = text;
//   });
// });

// let myFetch = fetch(url);

// myFetch.then(function(response) {
//   response.text().then(function(text) {
//     poemDisplay.textContent = text;
//   });
// });

// fetch(url).then(function(dogBiscuits) {
//   dogBiscuits.text().then(function(text) {
//     poemDisplay.textContent = text;
//   });
// });

// function(response) {
//   response.text().then(function(text) {
//     poemDisplay.textContent = text;
//   });
// }
// fetch(url).then(function(response) {
//   return response.text()
// }).then(function(text) {
//   poemDisplay.textContent = text;
// });

// let requestURL = './json.json';

// let request = new XMLHttpRequest();

// request.open('GET', requestURL);

// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   const superHeroes = request.response;
//   populateHeader(superHeroes);
//   showHeroes(superHeroes);
// }

// function populateHeader(obj) {
//   const myH1 = document.createElement('h1');
//   myH1.textContent = obj['squadName'];
//   header.appendChild(myH1);

//   const myPara = document.createElement('p');
//   myPara.textContent = 'Hometown: ' + obj['homeTown'] + ' // Formed: ' + obj['formed'];
//   header.appendChild(myPara);
// }


// let someHTML = '';
// for (let i = 0; i < newArray.length; i++) {
//   someHTML += `
//   <img src='${newArray[i].fileName}' alt='my image'>
//   <a href="${newArray[i].attribution.url}">Some Text</a>`;
// }
// newArray.forEach(function(image){
//   // someHTML = someHTML +``;  
//   someHTML += `
//   <img src='${image.fileName}' alt='my image'>
//   <a href="${image.attribution.url}">Some Text</a>`;
// });
 


  

