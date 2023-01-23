const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const instaPostData = require("../modal/post-schema");
const cors = require("cors")
const fileUpload = require("express-fileupload")
const path = require("path")
router.use(express.json());

router.use(bodyParser.urlencoded({ extended: true }));

router.use(cors());
router.use(fileUpload());

router.get("/user", (req, res) => {
    return res.status(200).json({
        message: "insta post route working !!!"
    })
})

router.post("/uploadpost", async (req, res) => {
    const { author, location, description } = req.body;
    const { image_file } = req.files;
    // console.log(path.join(__dirname + "/uplaods/"))
    image_file.mv("./uploads/" + image_file.name, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("moved")
        }
    })
    const data = await instaPostData.create({
        image_file: image_file.name,
        author: author,
        location: location,
        description: description
    })
    return res.status(200).json({
        message: "sucesss",
        data
    })
})


router.get("/allpost", async (req, res) => {
    const data = await instaPostData.find()
    return res.json({
        data
    })
})

router.get("/images/:fileName", (req, res) => {
    return res.sendFile(path.join(__dirname, `../uploads/${req.params.fileName}`))
})



router.delete("/delete/", async (req, res) => {
    const del = await instaPostData.deleteOne({ author: req.body.author })
    return res.status(200).json({
        message: "deleted succesfully",
    })
})

module.exports = router;