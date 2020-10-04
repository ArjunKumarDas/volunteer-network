import React from 'react';
import './Registation.css';
import logoImg from '../../images/icon/logo.png'
import { useHistory } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
const Registation = () => {
    const history = useHistory()
 const handleProcedCheckOut = () => {
       history.push('/eventTask');
 }
    return (
       <div className="container">
            <div className="header-part">
                <img src={logoImg} alt=""></img>
            </div>
            <div className="login-from">
                <from>
                    <h3 className="v-head">Register as a Volunteer</h3>
                    <p> <input className="border-bottom" name="name" type="text"  placeholder="Full Name" /> </p>
                    <p> <input className="border-bottom" name="name" type="text"  placeholder="User Name or Gmail" /> </p>
                    <p> <input className="border-bottom" name="name" type="text"  placeholder="Date" /> </p>
                    
                    <> <input className="border-bottom" name="name" type="text"  placeholder="Desicription" /> </>
                    <p> <input className="border-bottom" name="name" type="text"  placeholder="Organize books at the library" /> </p>
                    <p><input onClick={handleProcedCheckOut} className="button" type="submit" placeholder="Registration"/></p>
                     
                </from>
            </div>
       </div>
    );
};

export default Registation;