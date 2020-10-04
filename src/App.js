import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registation from './components/RegistaionFrom/Registation';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import EventTask from './components/EventTask/EventTask';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>name: {loggedInUser.email}</p> */}
     <Router>
         <Switch>
             <Route path="/home">
                 <Home></Home>
             </Route>
             <Route path="/login">
                 <Login></Login>
             </Route>
             {/* <PrivateRoute path="/register">
                 <Registation></Registation>
             </PrivateRoute> */}
             <Route path="/register">
                 <Registation></Registation>
             </Route>
             <Route path="/eventTask">
                 <EventTask></EventTask>
             </Route>
             <Route exact path="/">
                 <Home/>
             </Route>
         </Switch>
     </Router>
     </UserContext.Provider>
  );
}

export default App;
