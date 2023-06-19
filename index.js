const express = require(`express`);
const mongoose = require(`mongoose`);
const app = express();
const port = 5000;

app.use(express.json());

// default error handler
const errorHandler = (err, req, res, next) => {
    if (res.haadersSent) return next(err);
    res.status(500).json({ error: err });
};

app.listen(port, () => {
    console.log(`server running at ${port}`);
});
