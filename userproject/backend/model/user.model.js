const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    fname:{
        type: String,
        required:true,
        max: 100
    },
    lname:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    pass:{
        type: String,
        required:true,
    },
    country:{
        type: String,
        required:true,
    },
});


module.exports = model('User', UserSchema, 'users');


