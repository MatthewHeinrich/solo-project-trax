import React from 'react';
import { useDispatch } from 'react-redux';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <div  className={props.className} id="logoutContainer"
    onClick={() => dispatch({ type: 'LOGOUT' })}>
    <p>Log Out</p>
    </div>
  );
}

export default LogOutButton;
