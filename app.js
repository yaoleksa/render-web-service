const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, './');
const port = process.env.PORT || 7000;
const app = express();

app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.status(200).send(publicPath);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});