import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import './Header.css';
import mainLogo from '../../../Image/Main-Logo.png';

const Header = () => {

  const { user, handleSignOut } = useAuth();
  return (
    <div className='relative mb-5'>
      <nav className="navbar navbar-dark bg navbar-expand-lg fixed-top py-3">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container " id="navbarTogglerDemo01">
            <Link to="/home" className="">
              <img style={{ width: "36%" }} src={mainLogo} alt="mainLogo" />
            </Link>
            <ul className="navbar-nav justify-content-end w-100 me-5">
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/home"> Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/explore"> Explore </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/blogs"> Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/aboutus"> About Us</Link>
              </li>
              {user.email ?
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link text-white fs-5" to="/dashboard"> Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <span className="text-warning fs-6 userName ">{user.displayName}</span>
                    <img className="user-image rounded-circle ms-3 text-light border" src={user.photoURL} alt="user-img" />
                  </li>
                  <li className="nav-item">
                    <Link onClick={handleSignOut} className="nav-link text-white fs-5" to="/home"><i className="fas fa-sign-out-alt"></i></Link>
                  </li>
                </ul>
                :
                <li className="nav-item">
                  <Link className="nav-link text-white fs-5" to="/signin"><i className="fas fa-sign-in-alt"></i></Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;