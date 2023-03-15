import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button } from './Button';
import './Navbar.css';
import { signOut } from 'firebase/auth';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const logOut = () => signOut(auth);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
      <nav className="navbar">
          <div className="navbar-container">

              <Link to='/' className="navbar-logo" onClick={closeMenu}>
                  BRUINSPOTS <i class="fa-solid fa-paw" />
              </Link>

              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>

              <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMenu}>
                    Home
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/request' className='nav-links' onClick={closeMenu}>
                    Request
                  </Link>
                </li>

                <li>
                  {user && <Link to='/profile' className='nav-links-mobile' onClick={closeMenu}>
                  PROFILE
                  </Link>}
                  {user && <Link to='/' className='nav-links-mobile' onClick={() => {closeMenu(); logOut();}}>
                  LOGOUT
                  </Link>}

                  {!user && <Link to='/sign-in' className='nav-links-mobile' onClick={closeMenu}>
                  SIGN IN
                  </Link>}
              </li>

            </ul>
            {button && user && <Button buttonStyle='button--outline' linkTo='/profile'> PROFILE </Button>}
            {button && user && <Button buttonStyle='button--outline' onClick={logOut}> LOGOUT </Button>}

            {button && !user && <Button buttonStyle='button--outline'> SIGN IN </Button>}
          </div>
      </nav>
    </>
  )
}

export default Navbar
