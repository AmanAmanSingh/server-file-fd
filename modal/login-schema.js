const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const loginSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
})
