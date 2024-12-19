const courseServices = require('../services/courseServices');

// -- errorHandler --- //
async function errorHandler(msg, e, res,httpErrorCode = 400) {
    console.log(msg, " :", e)
    await res.status(httpErrorCode).json({message: e})
}

// --- Get All Courses --- //
const getAllCourses = async function (req, res, next) {
    try {
        const courses = await courseServices.getAllCourses();
        await res.status(200).json(courses);
    } catch (e) {
        await errorHandler("On Read", e, res);
    }
}

// --- Add New Course --- //
const addCourse = async function (req, res, next) {
    try {
        const course = await courseServices.addNewCourses(req.body);
        await res.status(201).json(course);
    } catch (e) {
        await errorHandler("On Create", e, res);
    }
}

// --- Update Course --- //
const updateCourse = async function (req, res, next) {
    try {
        let courseId = req.params['courseId'];
        let updatedCourse = req.body
        const updatedCourses = await courseServices.updateCourse(courseId, updatedCourse);
        await res.status(202).json(updatedCourse);
    } catch (e) {
        await errorHandler("On Update", e, res);
    }
}

// --- Delete Course --- //
const deleteCourse = async function (req, res, next) {
    try {
        let courseId = req.params['courseId'];
        const deletedCourse = await courseServices.deleteCourse(courseId);
        await res.status(200).json(deletedCourse);
    } catch (e) {
        await errorHandler("On Delete", e, res);
    }
}

// --- Operation --- //
const getCourseById_or_Category = async function (req, res, next) {
    try {
        let filter = req.params['filter'];
        const courses = await courseServices.getCourseById_or_Category(filter);
        await res.status(200).json(courses);
    } catch (e) {
        await errorHandler("On Read", e, res,404);
    }
}

module.exports = {
    getAllCourses,
    addCourse,
    updateCourse,
    deleteCourse,
    getCourseById_or_Category
}