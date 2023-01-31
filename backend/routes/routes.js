const express = require("express");
const router = express.Router();
const Workout = require('../models/workoutmodel');
const {createWorkout , getWorkout , getWorkouts} = require('../controller/workoutcontroller')

// get data

router.get("/", getWorkouts);

// get single data

router.get("/:id", getWorkout);

// post data

router.post("/", createWorkout);

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
