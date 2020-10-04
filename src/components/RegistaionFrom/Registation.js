import React, { useContext } from 'react';
import './Registation.css';
import logoImg from '../../images/icon/logo.png'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import Button from '@material-ui/core/Button'
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

const Registation = () => {
    const history = useHistory()
    const handleProcedCheckOut = () => {
       history.push('/eventTask');
 }
 const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  
//  const handleDateChange = (date) => {
//    setSelectedDate(date);
//  };
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

                   
     {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       
       
      
    </MuiPickersUtilsProvider> */}



                    {/* <p> <input className="border-bottom" name="name" type="text"  placeholder="Date" /> </p>  */}
                     <input className="border-bottom" name="name" type="text"  placeholder="Desicription" />
                    <p> <input className="border-bottom" name="name" type="text"  placeholder="Organize books at the library" /> </p>
                    <p><input onClick={handleProcedCheckOut} className="button" type="submit" placeholder="Registration"/></p> 
                      
                </from>
            </div>
       </div>
    );
};

export default Registation;