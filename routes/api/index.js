const express = require('express')
const router = express.Router()
const config = require('../config')

router.use((req, res, next) => {
  res.locals = config
  next()
})

router.get('/', (req, res) => {
  res.render('/views/partials', {pageTitle: "image gallery"})
})

router.get('/ejs', (req, res) => {
  res.render('pages', {pageTitle: "ejs"})
})

module.exports = router;