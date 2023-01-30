const express = require("express");
const router = express.Router();

// get data

router.get("/", (req, res) => {
    res.json({
        msg: 'Get all req'
    })
});

// get single data

router.get("/:id", (req, res) => {
    res.json({
        msg: 'Get single req'
    })
});

// post data

router.post("/", (req, res) => {
    res.json({
        msg: 'post req'
    })
});

// delete data


router.delete("/:id", (req, res) => {
    res.json({
        msg: 'delete req'
    })
});

// edit data


router.patch("/:id", (req, res) => {
    res.json({
        msg: 'edit request'
    })
});

module.exports = router
