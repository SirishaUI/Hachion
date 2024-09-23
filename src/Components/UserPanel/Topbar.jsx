import React, { useState } from 'react';
import { PiLineVerticalThin } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import whatsapp from '../../Assets/logos_whatsapp-icon.png';
import './Home.css';
import { Link } from 'react-router-dom';
import {IoLogOut} from 'react-icons/io5';
import profile1 from '../../Assets/profile1.jfif';
import Avatar from '@mui/material/Avatar';


const Topbar = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
   
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className='topbar'>
        <div className='topbar-left'>
          <p className='query-content'>Have any query ?</p>
          <div className='training-mail'>
            <img src={whatsapp} alt='whatsapp-icon' className='whatsapp-icon' />
            <p className='whatsapp-number'> +91 9490323388</p>
            <PiLineVerticalThin style={{ color: 'white', fontSize: '2rem' }} />
          </div>
          <div className='training-mail'>
            <IoIosMail className='training-mail-icon' />
            <p className='training-email'>trainings@hachion.co</p>
          </div>
        </div>

        {/* Conditional Rendering Based on Login Status */}
        {isLoggedIn ? (
          <>
          <div className='logout-right'>          <button className='logout-btn'><IoLogOut style={{fontSize:'2rem',gap:'0.5vh'}}/>Logout</button>
          <div className='user-info'>
            <div className="btn-group">
            
              <Avatar alt="user_name" src={profile1} />
              <div class="dropdown">
  <Link className="btn-logout dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Hachion
  </Link>

  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to={'/userdashboard'}>Dashboard</Link></li>
    <li><Link className="dropdown-item" href="#">Settings</Link></li>
    <li><a className="dropdown-divider" /></li>
    <li><Link className="dropdown-item" href="#" onClick={handleLogout}>Logout</Link></li>
  </ul>
</div>
  
            
            </div>
          </div>
          </div>

          </> ) : (
          <div className='login-div'>
            <Link to='/login' className='login-link-home'>
              <button className='login-div-content'>Login</button>
            </Link>
            <PiLineVerticalThin style={{ color: 'white', fontSize: '2rem' }} />
            <Link to='/register' className='login-link-home'>
              <button className='login-div-content'>Register</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Topbar;
