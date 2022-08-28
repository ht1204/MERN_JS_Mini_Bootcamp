import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = (props) => {

    const [users, setUsers] = useState([]);
    const BASE_URL = 'http://localhost:8000/user/api/';

    useEffect(() => {
        getData();
    }, []);


    const getData = () => {
        const data = axios.get(BASE_URL);
        data.then(res => setUsers(res.data))
        .catch(err =>  {
            console.log(err);
            setUsers([]);
        });
    };

    const viewUser = (id) => {
        props.history.push({
            pathname: '/details/'+id
        });
    };

    const deleteUser = (id) => {
        axios.delete(BASE_URL + "/" + id)
        .then(res => getData())
    }

    
    let tabRow = [];
    if(users) {
       tabRow = users.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user._id}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>
                        <button className="btn btn-primary" onClick={() => viewUser(user._id)}>
                            View
                        </button>
                        <button className="btn btn-primary" style={{marginLeft: '10px'}} onClick={() => { deleteUser(user._id) }}>
                             Delete User
                        </button>
                    </td>
                </tr>
            )
        });
    }


    return(
        <>
            <h1>User List Component</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                {tabRow && (
                    <tbody>{tabRow}</tbody>
                )}
               
            </table>
        </>
    );
}

export default UserList;