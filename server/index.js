
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;
const axios = require('axios');


app.listen(port, () => console.log(`Server up on port: ${port}`));

app.use(cors());

app.get('/', (req, res) => res.send('Server Up'));

app.get('/users', async (req, res) => {
    let results = await axios.get("https://jsonplaceholder.typicode.com/users");
    res.send(results.data);
});

app.get('/posts', async (req, res) => {
    let results = await axios.get("https://jsonplaceholder.typicode.com/posts")
    res.send(results.data);
})


