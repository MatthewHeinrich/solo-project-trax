import React from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function LogOutButton(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div  className={props.className} id="logoutContainer"
    onClick={() => dispatch({ type: 'LOGOUT' })}>
    {history.push('/login')}
    <p>Log Out</p>
    </div>
  );
}

export default LogOutButton;
