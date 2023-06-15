const Course = require("../models/Course");
const {mongooseToObject} = require('../../utils/mongoose')
class CourseControllers {
  //[GET] /
  show(req, res,next) {
    Course.findOne({slug:req.params.slug})
    .then(course=>{
        res.render('courses/show',{course:mongooseToObject(course)})
    })
    .catch(next)
    // res.render('home')
  }
    //[GET] /courses/create
  create(req,res){
    res.render('courses/create')
  }
   //[POST] /courses/store
   store(req,res,next){
    const course = new Course(req.body)
    course.save()
    res.send("SUCCESS!!")
  }
}

module.exports = new CourseControllers();

