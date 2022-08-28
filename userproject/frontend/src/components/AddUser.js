import React, { useState } from 'react';
import axios from 'axios';

const AddUser = (props) => {
    const BASE_URL = 'http://localhost:8000/user/api/';

    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        pass: '',
        country: ''
    });

    const inputHandler = (event) => {
        const { target: { name, value } } = event;

        setUser((user) => ({
            ...user,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(BASE_URL, user)
        .then(res => props.history.push('/list'))
        .catch(err=> console.log(err));
    }

    return(
        <>
            <h1>Add User Form</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form className="form" onSubmit={handleSubmit}>
                            <label>First Name</label>
                            <input 
                                type="text" 
                                name="fname" 
                                id="fname"
                                placeholder="Enter First Name"
                                value={user.fname || ''}
                                className="form-control"
                                onChange={inputHandler}
                            />
                            <label>Last Name</label>
                            <input 
                                type="text" 
                                name="lname" 
                                id="lname"
                                placeholder="Enter Last Name"
                                value={user.lname || ''}
                                className="form-control"
                                onChange={inputHandler}
                            />
                            <label>E-mail</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                placeholder="Enter email"
                                value={user.email || ''}
                                className="form-control"
                                onChange={inputHandler}
                            />
                            <label>Password</label>
                            <input 
                                type='password' 
                                name='pass' 
                                id='pass' 
                                placeholder="Enter Password"
                                value={user.pass || ''} 
                                className='form-control' 
                                onChange={inputHandler}
                            />
                            <label>Country</label>
                            <input 
                                type='text' 
                                name='country' 
                                id='country' 
                                placeholder="Enter Country"
                                value={user.country || ''} 
                                className='form-control' 
                                onChange={inputHandler}
                            />
                            <button className="btn btn-primary" type="submit">
                                Add User Details
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default AddUser;

