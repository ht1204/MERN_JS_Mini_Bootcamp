const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://localhost:27017/usersystem';

mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if(!err) console.log('Connected');
        else console.log('Error trying to connect');
    }
);


const user = require('./user.model');
