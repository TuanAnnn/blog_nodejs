const express = require('express')
const router = express.Router();

const meController = require('../app/controllers/meControllers')

//CourseControllers.index

router.get('/stored/courses',meController.storedcourses)

module.exports = router