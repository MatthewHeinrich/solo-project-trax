import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () =>{
    setNavbarOpen(prev => !prev)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (

    <div className="nav" >
      <Link to="/home">
        <h2 className="nav-title">Trax</h2>
      </Link>
      <nav className="navBar">
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <button className="navbtn" onClick={handleToggle}>{navbarOpen ? (
                  <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                  <FiMenu style={{ color: "white", width: "40px", height: "40px" }} />
                )}</button>
        <Link className="navLink" to={loginLinkData.path} onClick={() => closeMenu()}>
          {loginLinkData.text}
        </Link>

        {user.id && (
          <>
            <Link className="navLink" to="/favorites" onClick={() => closeMenu()}>
              Favorites
            </Link>
            {/* <LogOutButton className="navLink" /> */}
          </>
        )}

        <Link className="navLink" to="/about" onClick={() => closeMenu()}>
          About
        </Link>

          <Link className="navLink" onClick={() => closeMenu()}>
          <LogOutButton />
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
