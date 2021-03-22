const path = require('path');
const express =  require('express');
const app = express();
const port = 3000;
const router = express.Router()
//import variables 
app.get('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
//The path.join() method to join the views with public into one path.
app.use(express.static('./public'));
//app.use to register a middle-ware which has access to the intended request object in this case ./public.
app.get('/',function (req, res) {
res.render('pages/elements')
});
// respond with render to get the json into ../elements 
app.listen(port, () => console.log(`MasterEJS app 
Started on port ${port}!`));


router.get('./index', (request, response) => {
  response.render('index', {alt: 'class="alt"'});
})

router.get('./elements', (request, response) => {
  response.render('elements', {alt: ''});
})

module.exports = router
