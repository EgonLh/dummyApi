var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

// ----- get all users ----- //
router.get('/', userController.getAllUsers);
// ----- create a user ----- //
router.post('/', userController.createUser);
// ----- update a user ----- //
router.put('/:userId', userController.updateUser);
// ----- delete a user ----- //
router.delete('/:userId', userController.deleteUser)

//-----> get course by userid
router.get('/:userId', userController.getUserByID)
//-----> enrolled/canceled a course by courseId
router.put('/:userId/:courseId', userController.enrolledCourse);

module.exports = router;
