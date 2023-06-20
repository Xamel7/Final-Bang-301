'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const muscleVideo = require('./Muscle');
const mongoose = require('mongoose');
// const verifyUser = require("./verifyUser")


const app = express();
app.use(cors());
app.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});


const PORT = process.env.PORT || 3002;
// Connect to the database using the provided connection string
mongoose.connect(process.env.DATABASE_CONNECTION_STRING).then(() => {
    console.log("connected successfully..")
})
console.log('We in dere')
app.get('/', async (request, response) => {
    response.send("test")
})

app.get('/muscle', async (request, response) => {
    try {
        let allVideos = []
        if (request.user?.email) {
            allVideos = await muscleVideo.find({ email: request.user?.email });
        } else {
            allVideos = await muscleVideo.find();
        }
        response.json(allVideos);
    } catch (error) {
        console.error('Error retrieving workout videos:', error);
        response.status(500).json({ error: 'Server Error' });
    }
});

// app.post('/upload', async (request, response) => {
//     try{
        
//     }
// })


app.listen(PORT, () => console.log(`listening on ${PORT}`));
