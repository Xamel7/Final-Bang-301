const mongoose = require('mongoose');

const muscleVideoSchema = new mongoose.Schema({
    bodyGroup: {
        type: String,
        required: true
    },
    videoURL: {
        type: String,
        required: true
    }
});

const MuscleVideo = mongoose.model('MuscleVideo', muscleVideoSchema);

module.exports = MuscleVideo;