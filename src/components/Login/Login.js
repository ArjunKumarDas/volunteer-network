import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth"
import './Login.css';
import logoImg from '../../images/icon/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
     if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
     }
     const history = useHistory();
     const location = useLocation();
     const { from } = location.state || { from: { pathname: "/" } };
 
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
           const {disdplayName, email} = result.user;
           const signedInUser = {name: disdplayName, email}
           setLoggedInUser(signedInUser);
           history.replace(from);
           
          }).catch(function(error) {
            const errMessage = error.message
            console.log(errMessage);
          });
    }
    return (
        <div className="container">
           <div className="header-part">
                <img src={logoImg} alt=""></img>
           </div>
             <div className="login-google">
                 <h4>Login With</h4>
                   <p><button onClick={handleGoogleSignIn}>Continue with Google</button></p>
                   <p>Don't have an acount ? <Link>Create an account</Link></p>
             </div>
        </div>
    );
};

export default Login;