const express = require("express");
const router = express.Router();
const Workout = require('../models/workoutmodel');

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

router.post("/", async(req, res) => {
    // res.json({
    //     msg: 'post req'
    // })
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
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
