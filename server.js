const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

var bodyParser = require('body-parser');
const port = 3001;


const userData = [
    {
        id: 1,
        name: 'Dave',
        avatar: '',
        credits: 500,
    },
    {
        id: 2,
        name: 'Jane',
        avatar: '',
        credits: 400,
    },
    {
        id: 3,
        name: 'John',
        avatar: '',
        credits: 600,
    },

];
app.use(cors());
app.use(bodyParser.json())

const loadAvatar = async () => {
    userData.forEach(async (user) => {
        const imageObj = await axios.get('https://randomuser.me/api/');
        user.avatar = imageObj.data.results[0].picture.thumbnail;
    })
}

loadAvatar()

app.get('/leaderboard', async (req, res) => {
    res.json(userData);
})

app.post('/players/add-player', async (req, res) => {
    const imageObj = await axios.get('https://randomuser.me/api/');
    userData.push({ ...req.body, avatar: imageObj.data.results[0].picture.thumbnail, id: userData[userData.length - 1].id + 1 });
    res.json(userData.pop());
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})