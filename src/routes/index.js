const express = require('express');
const router = express.Router();

// Controllers
const home = require('../controllers/home');
const image = require('../controllers/image');

const { isAuthenticated } = require('../helpers/auth');

 //
 router.get('/', (req, res) => {
  res.render('main');
});
router.get('/home', isAuthenticated ,home.index)
  router.get('/:image_id',isAuthenticated, image.index);
  router.post('/images',isAuthenticated, image.create);
  router.post('/images/:image_id/like', isAuthenticated,image.like);
  router.post('/images/:image_id/comment',isAuthenticated, image.comment);
  router.delete('/images/:image_id', isAuthenticated,image.remove);

  module.exports = router;
