module.exports = function(app) {
  app.get('/newChild/', function(req, res) {
    res.render('newchild');
  });

  app.get('/scheduleChild', function(req, res) {
    res.render('schedulechild');
  });
};
