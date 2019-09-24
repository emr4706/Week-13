var express = require("express");
var router = express.Router();

/* GET home page. */

// Add new topic
router.get("/", function(req, res, next) {
  res.render("index", {topics: topics});
});


let topics = [
  { id: 1, text: "JavaScript Essentials 1" },
  { id: 2, text: "JavaScript Essentials 2" },
  { id: 3, text: "jQuery Essentials" },
  { id: 4, text: "React Essentials" }
];

router.post("/add-topics", (req, res) => {

  let newTopic = req.body.newTopic;
  topics.push({ id: "", text: newTopic });

  res.redirect("/");

});

// Delete the topic

router.post("/delete-topic", (req, res) => {

  let id = req.body.id;
  topics = topics.filter(topic => topic.id != id);

  res.redirect("/");

});

module.exports = router;
