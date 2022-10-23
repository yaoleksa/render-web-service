const express = require('express');
const async = require('async');
const path = require('path');
const publicPath = path.join(__dirname, './');
const port = process.env.PORT || 7000;
const app = express();

function parallel(middlewares){
    return function (req, res, next){
        async.each(middlewares, (mw, cb) => {
            mw(req, res, cb);
        }, next)
    }
}

app.use(express.static(publicPath));
app.use(parallel(express.middlewares));

app.get('/', (req, res) => {
    res.status(200).send(publicPath);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});