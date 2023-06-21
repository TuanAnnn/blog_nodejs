const Course = require("../models/Course");
const { multiMongooseToObject } = require("../../utils/mongoose");
class MeControllers {
  //[GET] /me/stored/courses
  storedcourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: multiMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeControllers();
