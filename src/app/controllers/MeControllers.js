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
  trashcourses(req, res, next) {
    Course.findDeleted({deleted: true})
      .then((courses) => {
        res.render("me/trash-courses", {
          courses: multiMongooseToObject(
            courses.filter((course) => course.deleted)
          ),
        });
      })
      .catch(next);
  }
  // trashCourses(req, res, next) {
  //   Course.findDeleted({ deleted: true })
  //     .then((courses) =>
  //       res.render("me/trash-courses", {
  //         courses: multiMongooseToObject(
  //           courses.filter((course) => course.deleted === true)
  //         ),
  //       })
  //     )
  //     .catch(next);
  // }
}

module.exports = new MeControllers();
