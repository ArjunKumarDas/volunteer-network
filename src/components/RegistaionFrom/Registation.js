import React, { useContext, useState } from 'react';
import './Registation.css';
import logoImg from '../../images/icon/logo.png'
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const Registation = () => {
    const [selectedDate, setSelectedDate] = useState({ setDate: new Date() });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const history = useHistory()

    const handleDateChange = (date) => {
        const newDates = { ...selectedDate }
        newDates.setDate = date
        setSelectedDate(newDates);
    };
    const registation = () => {
       const register = {...loggedInUser, ...selectedDate};
       fetch('http://localhost:4000/addUser', {
           method:'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(register)
       })
       .then(res => res.json())
       .then(data => {
           console.log(data);
       })
    }
    return (
        <div className="container">
            <div className="header-part">
                <img src={logoImg} alt=""></img>
            </div>
            <div className="login-from">
                <from>
                    <h3 className="v-head">Register as a Volunteer</h3>
                    <p className="border-bottom">Full Name : {loggedInUser.displayName}</p>
                    <p className="border-bottom">Username or Email : {loggedInUser.email}</p>
                    <p><MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className="border-bottom"
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                id="date-picker-inline"
                                value={selectedDate.setDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{'aria-label': 'change date',}}
                            />
                        </MuiPickersUtilsProvider></p>
                    <input className="border-bottom" name="name" type="text" placeholder="Desicription" />
                    <p> <input className="border-bottom" name="name" type="text" placeholder="Organize books at the library" /> </p>
                    <p><Link to="/eventTask"><input onClick={registation} className="button" type="submit" placeholder="Registration" /></Link></p>

                </from>
            </div>
        </div>
    );
};

export default Registation;