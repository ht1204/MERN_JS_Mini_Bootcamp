import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';


const UserDetails = () => {

    const [user, setUser] = useState({});
    const params = useParams();
    const history = useHistory();
    const BASE_URL = 'http://localhost:8000/user/api/'+params.id;

    useEffect(() => {
        const data = axios.get(BASE_URL);
        data.then(res => setUser(res.data))
        .catch(err => {
            console.log(err);
            setUser({});
        });

    }, []);


    return(
        <>
            <button className="btn btn-info" onClick={history.goBack}>Go Back</button>
            <h1>User Details</h1>
            <ul className="list-group">
                <li className="list-group-item">Id: {user._id}</li>
                <li className="list-group-item">First Name: {user.fname}</li>
                <li className="list-group-item">Last Name: {user.lname}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Country: {user.country}</li>
            </ul>
        </>
    );
};

export default UserDetails;