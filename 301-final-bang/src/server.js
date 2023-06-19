'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const MuscleVideo = require('./MuscleVideo');
const mongoose = require('mongoose');


const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3002;
// Connect to the database using the provided connection string
mongoose.connect(process.env.DATABASE_CONNECTION_STRING), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
console.log('We in dere')

app.get('/muscle', async (request, response) => {
    try {
        const videos = await MuscleVideo.find();
        response.json(videos);
    } catch (error) {
        console.error('Error retrieving workout videos:', error);
        res.status(500).json({ error: 'Server Error' });
    }
});



app.listen(PORT, () => console.log(`listening on ${PORT}`));
