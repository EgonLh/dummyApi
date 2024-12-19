var express = require('express');
var router = express.Router();
const courseController = require('../controllers/courseController')

// --- get all courses --- //
router.get('/', courseController.getAllCourses);
// --- create a course --- //
router.post('/', courseController.addCourse);
// --- update a course --- //
router.put('/:courseId', courseController.updateCourse)
// --- delete a course --- //
router.delete('/:courseId', courseController.deleteCourse)
// --- get course by category or id---- //
router.get('/:filter', courseController.getCourseById_or_Category);
module.exports = router;