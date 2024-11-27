import React, { useEffect, useRef, useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

const NavBar = () => {
  const navRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleProfileClick = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} alt="Search Icon" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="Notification Icon" className='icons' />
        <div className='navbar-profile'>
          <img 
            src={caret_icon} 
            alt="Profile Dropdown" 
            className='profile' 
            onClick={handleProfileClick} 
          />
          <img src={profile_img} alt="User Profile" className='profile' />
          {dropdownOpen && (
            <div className='dropdown'>
              <p onClick={()=>{logout()}}>Logout from Netflix</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
