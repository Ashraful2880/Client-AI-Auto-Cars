import React from 'react';
import './Register.css';
import { Link, useHistory } from 'react-router-dom';
import google from '../../Image/google.png';
import github from '../../Image/gtihub.png';
import useAuth from '../../Hooks/UseAuth';

const Register = () => {
    const{handleRegister,handleName,handleEmail,handlePassword,googleSignIn,gitHubSignIn,error,user,setError}=useAuth();
    let history=useHistory();
    return (
        <div className="mt-5 mx-auto border-2 rounded-3 register-container">
            <div className="rounded-3 reg-area mx-auto">
                <div className="mx-auto col-lg-4 col-md-6 col-sm-12">
                    <h2 className="text-light pt-5">Please Signup-in</h2>
                    <h3 className="text-danger fst-italic mb-5">AI Auto Cars</h3>
                    <form onSubmit={handleRegister}>
                        {user.email?history.push('/explore'):''}
                        {user.email?setError(''): <span className="text-warning">{error}</span> }
                        <div>
                            <input onBlur={handleName} className="reg-input w-100 p-3 my-3 rounded-3" type="text" placeholder="Your Name" required/>
                        </div>
                        <div>
                            <input onBlur={handleEmail} className="reg-input w-100 p-3 my-3 rounded-3" type="email" placeholder="Your Email" required/>
                        </div>
                        <div>
                            <input onBlur={handlePassword}className="reg-input w-100 p-3 my-3 rounded-3" type="password" placeholder= " Your Password" required  />
                        </div>
                        <div>
                            <input className="w-100 py-3 mb-4 btn btn-danger rounded-3" type="submit" value="Register" />
                        </div>
                        <div>
                            <h5 className="text-light">Already Registerd? <Link className="text-danger" to="/signin">Login Here</Link></h5>
                            <p className="fw-bold text-light">Or</p>
                        </div>
                    </form>
                        <div className="mx-auto mb-3 pb-5">
                            <button onClick={googleSignIn} className=" border social-sign-button border border-danger border-2">
                                <img className="w-100" src={google} alt="googleImage" />
                            </button>
                            <button onClick={gitHubSignIn} className=" border social-sign-button border border-danger border-2" >
                                <img className="w-100" src={github} alt="githubImage" />
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Register;