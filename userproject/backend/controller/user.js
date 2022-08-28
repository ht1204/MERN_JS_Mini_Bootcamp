const { Router } = require('express');
const { model } = require('mongoose');

const UserModel = model('User');
// const UserModel = require('../model/user.model');
const router = Router();

router.get('/', (req, res) => {
    UserModel.find((err, data) => {
        if(!err) res.status(200).json(data);
        else console.log('Error: ', err);
    });

});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    UserModel.findById(id, (err, data) => {
        if(!err) res.status(200).send(data);
        else res.status(404).send({ message: 'User not found with id: '+ id });
    });
}); 

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    UserModel.findByIdAndRemove(id, (err, data) => {
        if(!err) res.status(200).send({ message: 'User deleted successfully: '});
        else res.status(404).send({ message: 'User not found with id: '+ id });
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    let user = new UserModel();
     
    user.fname= req.body.fname;
    user.lname= req.body.lname;
    user.email= req.body.email;
    user.pass = req.body.pass;
    user.country = req.body.country;


    user.save((err, data) => {
        if(!err) res.status(200).send(data);
        else console.log('Error trying to connect db: ', err);
    });
});

router.put('/:id', (req, res) => {

    if(!req.body) {
        return res.status(400).send({
            message: 'Data cannot be empty!'
        });
    }

    const { id } = req.params;

    UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: 'Cannot update user, could not be found '
            });
        } else {
            res.status(200).send({
                message: 'User was updated successfully'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Updating operation error: '+err
        });
    });

});

module.exports = router;
