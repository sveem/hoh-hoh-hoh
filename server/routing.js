var bodyParser = require('body-parser');
var path = require('path');
var wishlistController = require('./wishlist/wishlistController');
var itemController = require('./item/itemController');

module.exports = function (app, express) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '/../client')));
  app.use(express.static(path.join(__dirname, '/../node_modules')));

  //requests for wishlists
  app.get('/api/wishlist', wishlistController.getAll);
  app.post('/api/wishlist', wishlistController.addOne);
  //requests for items
  app.get('/api/item', itemController.getAll);
  app.post('/api/item', itemController.addOne);
};
