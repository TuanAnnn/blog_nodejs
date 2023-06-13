const Course = require("../models/Course");
const {multiMongooseToObject} = require('../../utils/mongoose')
class SiteControllers {
  //[GET] /
  index(req, res) {
    Course.find({})
      .then(courses =>{
        res.render("home", {
          courses:multiMongooseToObject(courses)
        })
      }
      )
      .catch((err) => res.status(400).json({ err: "error" }));
    // res.render('home')
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteControllers();
