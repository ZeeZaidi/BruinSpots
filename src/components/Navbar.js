import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

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
                  <Link to='/favorites' className='nav-links' onClick={closeMenu}>
                    Favorites
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/aboutUs' className='nav-links' onClick={closeMenu}>
                    About Us
                  </Link>
                </li>

                <li>
                 <Link to='/profile' className='nav-links-mobile' onClick={closeMenu}>
                  PROFILE
                </Link>
              </li>

            </ul>
            {button && <Button buttonStyle='button--outline'> LOG IN </Button>}
          </div>
      </nav>
    </>
  )
}

export default Navbar
