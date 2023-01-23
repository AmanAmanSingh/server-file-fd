const mongoose = require("mongoose");

const instaPostSchema = new mongoose.Schema({
    image_file: {
        type: String,

    },
    author: {
        type: String,

    },
    location: {
        type: String,

    },
    description: {
        type: String,

    },
    Date: {
        type: String,
        default: new Date().toDateString().slice(4)
    }

}, { timestamps: true })

module.exports = mongoose.model("instapost", instaPostSchema)