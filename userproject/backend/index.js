const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const UserModel = require('./model/');
const UserController = require('./controller/user');


const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    res.render('<h1>Hello!</h1>');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/user/api', UserController);



app.listen(PORT, () => {
    console.log('Server using ', PORT);
});






