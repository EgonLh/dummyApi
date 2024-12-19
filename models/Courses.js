const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    courseName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    pricing: {
        type: {
            fees: {
                type: Number
            },
            isFree: {
                type: Boolean,
                default: false
            },
        }
    },
    metadata: {
        type: {
            createdAt: {
                type: String,
                required: true,
            },
            updateAt: {
                type: String,
                default: ""
            }
        }
    }
})

module.exports = mongoose.model('courses', CourseSchema)