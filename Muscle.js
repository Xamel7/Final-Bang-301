const mongoose = require("mongoose")

const muscleVideoSchema = new mongoose.Schema({
    muscleParts: {
        type: String,
        required: true
    },
    videoURL: {
        type: String,
        required: true
    }
});

const muscleVideo = mongoose.model('muscleVideo', muscleVideoSchema);

module.exports = muscleVideo;