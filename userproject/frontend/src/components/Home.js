
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import AddUser from './AddUser';
import UserList from './UserList';
import UserDetails from './UserDetails';

const Home = () => {

    return (
        <BrowserRouter>
            <div className='container'>
                <nav className='btn btn-warning navbar navbar-expand-lg navheader'>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to="/create" className='nav-link'>Add User</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/list" className='nav-link'>List of Users</Link>
                        </li>
                    </ul>
                </div>
                </nav>
                <Switch>
                    <Route exact path="/create" component={AddUser}></Route>
                    <Route exact path="/list" component={UserList}></Route>
                    <Route exact path="/details/:id" component={UserDetails}></Route>
                </Switch>
            </div>
         </BrowserRouter>
    );

}

export default Home;