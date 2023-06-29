const express = require(`express`);
const mongoose = require(`mongoose`);
require('dotenv').config();

// express app initialization
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

// database connection with mongoose
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`connection successful`))
    .catch((err) => console.log(err));

// default error handler
const errorHandler = (err, req, res, next) => {
    if (res.haadersSent) return next(err);
    res.status(500).json({ error: err });
};

app.listen(port, () => {
    console.log(`server running at ${port}`);
});
