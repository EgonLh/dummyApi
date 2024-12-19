let Users = require('../models/Users');

// --- get all users --- //
const getAllUsers = async () => Users.find();

// --- create a user --- //
const createUser = async (user) => {
    const newUsr = new Users(user);
    return newUsr.save();
}

// --- update a user --- //
const updateUser = async (userId, userInfo) => {
    const org_user = await Users.findById(userId);
    userInfo.courseId = JSON.parse(JSON.stringify(org_user.courseId));
    try {
        const updateUser = await Users.findByIdAndUpdate(userId, userInfo, {new: true});
        return updateUser.populate("courseId");
    } catch (e) {
        console.log("> Error :", e);
    }
}

// --- delete a user --- //
const deleteUser = async (userId) => {
    const deletedUser = await Users.findByIdAndDelete(userId);
    return deletedUser;
}

// --- get user by id --- //
const getUserById = async (userId) => Users.findById(userId).populate("courseId");

// --- enroll / cancel process --- //
const enrolledByUserId = async (userId, courseId) => {
    const updated_users = await Users.findById(userId);
    let tempCourseID = [];
    updated_users.courseId.includes(courseId) ? tempCourseID = updated_users.courseId.filter(a => a.toString() !== courseId) : updated_users.courseId.push(courseId);
    if (tempCourseID.length) {
        updated_users.courseId = JSON.parse(JSON.stringify(tempCourseID));
        const updatedUser = await Users.findByIdAndUpdate(userId, updated_users, {new: true});
        return updatedUser.populate("courseId");
    }
    const updatedUser = await Users.findByIdAndUpdate(userId, updated_users, {new: true});
    return updatedUser.populate("courseId");
}

module.exports = {
    getAllUsers,
    getUserById,
    enrolledByUserId,
    createUser,
    updateUser,
    deleteUser
}