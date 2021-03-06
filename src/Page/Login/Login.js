import React from 'react';
import './Login.css';
import { Link , useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
const Login = () => {

    const{handleSignIn,handleEmail,handlePassword,user}=useAuth();
    let history=useHistory();
    return (
        <div className="mt-5 mx-auto">
            <div className="rounded-3 login-text mx-auto login-container">
                <div className="mx-auto col-lg-4 col-md-6 col-sm-12">
                    <h3 className="fw-bold pt-5 text-light">Welcome Back!</h3>
                    <h2 className="fw-bold text-light">Please Login</h2>
                    <h4 className="text-danger fw-bold fst-italic mb-4">Mr Automative</h4>
                    <form onSubmit={handleSignIn}>
                        <div>
                            <input onBlur={handleEmail} className="login-input p-3 w-100 my-4 border-0 border-bottom border-danger" type="email" placeholder="Your Email"/>
                        </div>
                        <div>
                            <input onBlur={handlePassword} className="login-input p-3 w-100 my-3 border-0 border-bottom border-danger" type="password" placeholder="Your Password" />
                        </div>
                        <div>
                            {user.email?history.push('/home'):''}
                            <input className="p-2 w-100 my-2 fs-5 btn btn-danger rounded-3" type="submit" value="Login"/>
                        </div>
                        <div className="mx-auto">
                            <h5 className="text-light py-3">New User? 
                                <Link className="text-danger fw-bold" to="/signup"> Please Register</Link>
                            </h5>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;