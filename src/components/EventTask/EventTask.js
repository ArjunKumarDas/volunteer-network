import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './EventTask.css';

const EventTask = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch('https://still-ocean-78588.herokuapp.com/user?email='+loggedInUser.email)
      .then(res => res.json())
      .then(data => setUsers(data));
    },[])
    return (
        <div className="container">
            <div className="col-md-3 usertask">
               {
                   users.map(user => <div>
                       <div>Full Name : {user.displayName}</div>
                       <div>Email : {user.email}</div>
                       <div>Date : {(new Date(user.setDate).toDateString('DD/MM/YYYY'))}</div>
                   </div>)
               }
            </div>
            
        </div>
    );
};

export default EventTask;