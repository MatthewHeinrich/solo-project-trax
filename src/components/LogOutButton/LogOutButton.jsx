import React from 'react';
import { useDispatch } from 'react-redux';
import {useHistory, Link} from 'react-router-dom';


function LogOutButton(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div  className={props.className} id="logoutContainer"
    onClick={() => dispatch({ type: 'LOGOUT' })}>
    <Link to="/login"></Link>
    <p>Log Out</p>
    </div>
  );
}

export default LogOutButton;
