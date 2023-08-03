<<<<<<< HEAD
//var db = require('../models');

module.exports = function(app) {

  require('./childApiRoutes')(app);
  require('./forms')(app);
  require('./scheduleRoutes')(app);
  require('./mainroutes')(app);
=======
// var db = require('../models');

// module.exports = function(app) {

//   require('./childApiRoutes')(app);
//   require('./parentApiRoutes')(app);
//   require('../controllers/forms')(app);
//   require('../controllers/api/scheduleRoutes')(app);
//   require('../controllers/mainroutes')(app);
>>>>>>> project2



//   // Render 404 page for any unmatched routes
//   app.get('*', function(req, res) {
//     res.render('404');
//   });
// };
