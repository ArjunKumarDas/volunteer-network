import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './EventTask.css';

const EventTask = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch('http://localhost:4000/user?email='+loggedInUser.email)
      .then(res => res.json())
      .then(data => setUsers(data));
    },[])
    return (
        <div className="container">
            <div className="col-md-3 usertask">
               {
                   users.map(user => <div>
                       <p>Full Name : {user.displayName}</p>
                       <p>Email : {user.email}</p>
                       <p>Date : {(new Date(user.setDate).toDateString('DD/MM/YYYY'))}</p>
                   </div>)
               }
            </div>
            
        </div>
    );
};

export default EventTask;