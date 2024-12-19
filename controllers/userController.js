let userServices = require('../services/userServices');

// -- errorHandler --- //
async function errorHandler(msg, e, res, httpErrorCode = 400) {
    console.log(msg, " : ", e)
    await res.status(httpErrorCode).json({message: e})
}

// --- Get All Users --- //
const getAllUsers = async function (req, res, next) {
    try {
        const users = await userServices.getAllUsers();
        await res.status(200).json(users);
    } catch (e) {
        await errorHandler("On Read", e, res);
    }
}

// --- Create New User --- ///
const createUser = async function (req, res, next) {
    try {
        const newUser = await userServices.createUser(req.body)
        await res.status(201).json(newUser);
    } catch (e) {
        await errorHandler("On Create", e, res);
    }
}

// --- Update User --- //
const updateUser = async function (req, res, next) {
    try {
        let userId = req.params["userId"];
        let orgUsr = req.body;
        const updateUser = await userServices.updateUser(userId, orgUsr);
        await res.status(202).json(updateUser);
    } catch (e) {
        await errorHandler("On Update", e, res);
    }
}

// --- Delete User --- //
const deleteUser = async function (req, res, next) {
    try {
        let userId = req.params['userId']
        const deleteUser = await userServices.deleteUser(userId);
        await res.status(200).json(deleteUser);
    } catch (e) {
        await errorHandler("On Delete", e, res);
    }
}

// --- Operations --- //

const getUserByID = async function (req, res, next) {
    try {
        let userID = req.params["userId"];
        const user = await userServices.getUserById(userID);
        await res.status(200).json(user);
    } catch (e) {
        await errorHandler("On Read", e, res, 404);
    }
}

const enrolledCourse = async function (req, res, next) {
    try {
        let userID = req.params["userId"];
        let courseId = req.params["courseId"];
        const updatedUser = await userServices.enrolledByUserId(userID, courseId);
        await res.json(updatedUser);
    } catch (e) {
        await errorHandler("On Enrolled", e, res, 404);
    }
}

module.exports = {
    getAllUsers,
    getUserByID,
    enrolledCourse,
    createUser,
    updateUser,
    deleteUser
}