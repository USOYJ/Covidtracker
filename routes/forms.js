module.exports = function(app) {
  app.get('/newChild/:pid', function(req, res) {
    res.render('newchild',{parentId:req.params.pid});
  });

  app.get('/scheduleChild', function(req, res) {
    res.render('schedulechild');
  });
};
