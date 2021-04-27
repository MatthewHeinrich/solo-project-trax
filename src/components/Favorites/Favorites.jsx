import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(store => store.getFavorites)
  const user = useSelector(store => store.user.id)

  // useEffect(() => {
  //   // dispatch({type: 'FETCH_FAVORITES', payload: user})
  // }, [])

  const deleteFavorite = (id) => {
    dispatch({type: 'DELETE_FAV', payload: id})
    console.log(id)
  }

  return (
    <div className="container">
      <h2>Favorites</h2>

      {favorites.map(favorite => {
        console.log(favorites)
        return (
          
          <div className="card gradient-border">
          <div className='cardHeader'>
          <h2 className='cardData'>{favorite.trail_name}</h2>
          <h3 className='cardData'>- {favorite.trail_city} -</h3>
          </div>
          <img className="card-img-top" src={favorite.map_url}></img>
          <button onClick={() => {deleteFavorite(favorite.id)}} id="home-btn" class="btn btn-info">Delete</button>
          <Link to={`/details/${favorite.id}`}>
            <button id="home-btn" class="btn btn-info">Details</button>
          </Link>
          
          
      
        </div>

        )
      })}
    </div>
  );
}

export default Favorites;
