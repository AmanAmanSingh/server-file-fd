const express = require("express");
const router = express.Router();

router.get('/loginpage', (req, res) => {
    res.status(200).json({
        message: "login route working !!!"
    })
})




module.exports = router;