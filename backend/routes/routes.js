const express = require("express");
const router = express.Router();
const Workout = require('../models/workoutmodel');
const {createWorkout , getWorkout , getWorkouts, deleteWorkout, editWorkout} = require('../controller/workoutcontroller')

// get data

router.get("/", getWorkouts);

// get single data

router.get("/:id", getWorkout);

// post data

router.post("/", createWorkout);

// delete data


router.delete("/:id", deleteWorkout);

// edit data


router.patch("/:id", editWorkout);

module.exports = router
