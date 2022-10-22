const express = require('express');
const port = process.env.PORT || 7000;
const app = express();

app.get('/', (req, res) => {
    req.send('it works');
});

app.listen(port, () => {
    console.log(`http:localhost:${port}`);
});