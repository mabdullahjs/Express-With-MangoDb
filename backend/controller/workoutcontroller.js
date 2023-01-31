const Workout = require('../models/workoutmodel');
const mongoose = require('mongoose');

// get all workout
const getWorkouts = async (req, res) => {
    const workout = await Workout.find({}).sort({ createdAt: -1 });
    res.json(workout);
}
//get one workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ error: 'No such workout' })
    }
    const workout = await Workout.findById(id)
    res.json(workout)
}


//create workout

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete workout
const deleteWorkout = async(req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' })
    }
    const workout = await Workout.findByIdAndDelete({ _id: id });
    if (!workout) {
        return res.status(400).json({ error: 'No such workout' })
    }

    res.json(workout)
}

//edit workout
const editWorkout = async(req , res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' })
    }
    const workout = await Workout.findByIdAndUpdate({ _id: id } , {
        ...req.body
    });
    if (!workout) {
        return res.status(400).json({ error: 'No such workout' })
    }
    res.json(workout)
}

module.exports = { createWorkout, getWorkouts, getWorkout, deleteWorkout, editWorkout}