import React, {useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

import './UserPage.css'

function UserPage() {

  useEffect(() => {
    dispatch({ type: 'FETCH_TRAILS' });
    dispatch({type: 'FETCH_FAVORITES', payload: user})
  }, []);

  const dispatch = useDispatch();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const trails = useSelector((store) => store.trails)

  return (
    <div >
      <h2 className="featHead">Featured Trails</h2>
      {/* <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p> */}
      <SearchBar />
    {trails.map(trail => {
      return (
    
        <div className="card gradient-border">
          <div className='cardHeader'>
          <h3 className='cardData'>{trail.trail_name}</h3>
          <h3 className='cardData'>{trail.trail_city}</h3>
          </div>
          <img className="card-img-top" src={trail.map_url}></img>
          <Link to={`/details/${trail.id}`}>
            <button id="home-btn" class="btn btn-info">Details</button>
          </Link>
        
        </div>
        
      );
    })}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
