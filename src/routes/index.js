const express = require('express');
const router = express.Router();

// Controllers
const home = require('../controllers/home');
const image = require('../controllers/image');

const { isAuthenticated } = require('../helpers/auth');

 //definiendo rutas
 router.get('/', (req, res) => {
  res.render('main');
});
router.get('/home', isAuthenticated ,home.index)
  router.get('/:image_id',isAuthenticated, image.index);
  router.post('/image',isAuthenticated, image.create);
  router.post('/image/:image_id/like', isAuthenticated,image.like);
  router.post('/image/:image_id/comment',isAuthenticated, image.comment);
  router.delete('/image/:image_id', isAuthenticated,image.remove);

  module.exports = router;
