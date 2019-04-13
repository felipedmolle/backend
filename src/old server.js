const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb+srv://mongo-user_01:fdm2019@cluster0-0a779.mongodb.net/fdmtest?retryWrites=true',
    {
      useNewUrlParser: true
    }
);


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(require("./routes"));

app.listen(3333);
