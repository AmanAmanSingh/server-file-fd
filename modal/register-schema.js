const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const registerSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
})


const loginSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    user: {
        type: ObjectId,
        ref: "RegisterationData",
    }
})


const register = mongoose.model("RegisterationData", registerSchema);
const login = mongoose.model("login", registerSchema);

module.exports = register;
