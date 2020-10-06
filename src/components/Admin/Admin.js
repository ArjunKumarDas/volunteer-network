import React, { useEffect, useState } from 'react';
import './Admin.css';
const Admin = () => {
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        fetch('https://still-ocean-78588.herokuapp.com/allUser')
        .then(res => res.json())
        .then(data => setAllUsers(data));
      },[])
    return (
        <div className="container">
            <div className="row">
               <div>
                  <div className="name">Name</div>
                  <div className="name">Email</div>
                  <div className="name">Date</div>
               </div>
            </div>
             <div className="row">
             {
                allUsers.map(allUser => <div>
                       <div className="name">
                         <p>{allUser.displayName}</p>
                      </div>
                       <div className="name">
                         <p>{allUser.email}</p>
                      </div>
                      <div className="name">
                         <p>{(new Date(allUser.setDate).toDateString('DD/MM/YYYY'))}</p>
                      </div>
                </div>)
            }
             </div>
        </div>
    );
};

export default Admin;
