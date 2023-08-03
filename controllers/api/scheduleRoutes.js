const router = require("express").Router();
var db = require("../models");

//get whole schedule
router.get("/", function (req, res) {
  db.Schedule.findAll({
    include: [db.Child],
  }).then(function (dbSchedule) {
    JSON.stringify(dbSchedule);
    res.json(dbSchedule);
  });
});

//get schedule by child id
router.get("/:cid", function (req, res) {
  db.Schedule.findAll({
    where: {
      ChildId: req.params.cid,
    },
    include: [db.Child],
  }).then(function (dbSchedule) {
    res.json(dbSchedule);
  });
});

//update child
router.post("/:childid", function (req, res) {
  var theSchedule = {};
  theSchedule.ChildId = req.params.childid;
  var days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  for (var i = 0; i < days.length; i++) {
    if (days[i] in req.body) {
      if (req.body[days[i]] === "on") {
        theSchedule[days[i]] = true;
      }
    } else {
      theSchedule[days[i]] = false;
    }
  }
  db.Schedule.findOrCreate({
    where: { ChildId: req.params.childid },
    defaults: theSchedule,
  }).then(function (dbSchedule) {
    res.render("addanotherchildprompt", { pid: req.body.ParentId });
  });
});

//add new child
router.post("/", function (req, res) {
  //console.log(req.body);
  db.Child.create(req.body).then(function (dbChild) {
    console.log(dbChild);
    //res.json(dbChild);
    res.render("schedulechild", { childid: dbChild.id });
  });
});

router.delete("/:id", function (req, res) {
  db.Schedule.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbSchedule) {
    res.json(dbSchedule);
  });
});
module.exports = router;
