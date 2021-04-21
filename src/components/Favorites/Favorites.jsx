import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import axios from 'axios'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(store => store.getFavorites)

  useEffect(() => {
    dispatch({type: 'FETCH_FAVORITES'})
  }, [])
  return (
    <div className="container">
      {favorites.map(favorite => {
        return (
          
          <h4>{favorite.trail_name}</h4> 

        )
      })}
    </div>
  );
}

export default Favorites;
