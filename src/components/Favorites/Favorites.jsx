import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Favorites.css'
// import './App.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Favorites() {
  const dispatch = useDispatch();
  
  const favorites = useSelector(store => store.getFavorites)
  const user = useSelector(store => store.user.id)

  useEffect(() => {
    dispatch({type: 'FETCH_FAVORITES', payload: user})
  }, [])

  const deleteFavorite = (id) => {
    // toast.warning(`Favorite Deleted`, {
    //   position: "top-right",
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   });
    dispatch({type: 'DELETE_FAV', payload: id})
    dispatch({type: 'FETCH_FAVORITES', payload: user})
    console.log(id)

  }

  return (
    <div className="container">
      <h2 className="favHead">Favorites</h2>

      {favorites.map(favorite => {
        console.log(favorites)
        
        return (
          
          <div className="card gradient-border">
          <div className="favImg">
          <Link to={`/details/${favorite.id}`}>
          <img className="card-img-top" height={300} width={400} src={favorite.cover}></img>
          </Link>
          </div>
          <div className='cardHeader'>
          <h2 className='cardData'>{favorite.trail_name}</h2>
          <h3 className='cardData'>- {favorite.trail_city} -</h3>
          </div>
          <div className="favBtn">
          <DeleteForeverIcon onClick={() => {deleteFavorite(favorite.id)}} className="delete" ></DeleteForeverIcon>
          
            {/* <button id="home-btn" class="btn btn-info">Details</button> */}
          
          </div>
          
          
      
        </div>
        
        )
      })}
      <ToastContainer />
    </div>
  );
}

export default Favorites;
