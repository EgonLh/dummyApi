let Courses = require('../models/Courses');

// --- get all course --- //
const getAllCourses = async () => Courses.find();

// --- add new course --- //
const addNewCourses = async (course) => {
    let newCourse = new Courses(course);
    return newCourse.save();
}

// --- update a course --- //
const updateCourse = async (courseId, updatedCourse) => {
    let updateCourse = await Courses.findByIdAndUpdate(courseId, updatedCourse, {new: true});
    return updatedCourse;
}

// --- delete a course --- //
const deleteCourse = async (courseId) => {
    let deletedCourse = await Courses.findByIdAndDelete(courseId);
    return deletedCourse;
}

// --- get course by id or category --- //
const getCourseById_or_Category = async (filter) => {
    try {
        //get course by id
        let course = await Courses.findById(filter);
        return (course == null ? {data: null} : course);
    } catch (e) {
        try {
            //get course by category
            let courses = await Courses.find({category: {$regex: `^${filter}$`, $options: "i"}})
            return courses;
        } catch (e) {
            console.log("> Error :", e)
        }
    }


}

module.exports = {
    getAllCourses,
    addNewCourses,
    updateCourse,
    deleteCourse,
    getCourseById_or_Category
}
