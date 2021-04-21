import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const trails = useSelector((store) => store.trails)
  
  return (
    <>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
    {trails.map(trail => {
      return (
        <div className="container">
          <p>{trail.trail_name}</p>
          <p>{trail.trail_city}</p>
          <img src={trail.map_url}></img>
        </div>
      );
    })}
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
