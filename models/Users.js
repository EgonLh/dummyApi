const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    contact: {
        type: {
            email: {
                type: String,
                required: true
            },
            phoneNo: {
                type: String,
                required: true,
            }
        },
        required: true
    },
    Name: {
        type: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            }
        },
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    courseId: [{
        type: Schema.Types.ObjectId,
        ref : "courses",
        default:[]
    }],
    role: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('users',UserSchema)