const path = require('path');
const express =  require('express');
const port = 3000;

app.get('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/',function (req, res) {
res.render('pages/elements')
});

app.listen(port, () => console.log(`MasterEJS app 
Started on port ${port}!`));

const express = require('express');

const router = express.Router()

router.get('/', (request, response) => {
  response.render('index', {alt: 'class="alt"'});
})

router.get('./elements', (request, response) => {
  response.render('elements', {alt: ''});
})

module.exports = router
