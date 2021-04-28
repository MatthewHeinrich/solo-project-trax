import React, {useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'

import axios from 'axios'
import SearchBar from '../SearchBar/SearchBar'

import './UserPage.css'
import ReactStars from "react-rating-stars-component";

function UserPage(props) {
  let [overall, setOverall] = useState({})
  const user = useSelector((store) => store.user);
  const trails = useSelector((store) => store.trails)
  const rating = useSelector((store) => store.getRating)
  const data = useSelector((store) => store.rating)

  useEffect(() => {
    dispatch({ type: 'FETCH_TRAILS' });
    dispatch({type: 'FETCH_FAVORITES', payload: user})
    // dispatch({type: 'FETCH_RATING'})
    
  //   axios.get(`/api/details/${trails.id}`).then((response) =>{
  //     console.log(response.data)
  //     setDetails(response.data)
  // }).catch((err) =>{
  //     alert('Error');
  //     console.log(err);
  // })
  setOverall({trails,rating})
  }, []);
  console.log(data)
  console.log(overall)
  const dispatch = useDispatch();
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  console.log(trails)
  console.log(rating)
  const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
  

  let search = '';
  // this is the local state for the list of sna objects that matched the search
  const [filtered, setFiltered] = useState([]);
  // this stores whether or not a search has happened 
  const [searched, setSearched] = useState(false);
  // conditionally renders the list of all natural areas or the filtered natural areas
  const displayList = () => {
      let display = trails 
      if( searched ) {
          display = filtered
      }
      return display;
  }
  // handles search f
  const searchForTrails = (e) => {
      search += e.target.value;
      console.log( 'search', search );
      // create a regex pattern that looks at each letter of the search query
      if( search.length > 0) {
          let pattern = search.split('').map( x => {
          return `(${x})`
          }).join('');
          // creates a regex based on the search pattern and looks globally and is case insensitive
          let regex = new RegExp(`${pattern}`, "gi");
          console.log(regex);
          // sets the filtered array equal to the sna's that match the query
          setFiltered(trails.filter( trail => (trail.trail_name + trail.trail_city + trail.mapUrl).match(regex)))
          console.log(filtered);
          // set the search state to the opposite of what it was
          setSearched(true);
      } else {
          setSearched(false);
      }
  }
  
  
  return (
    <>
    <div>   

      <input
        className="searchBar"
        style={BarStyling}
        key="random1"
        // value={keyword}
        placeholder={"search trails"}
        onChange={(e) => searchForTrails(e)}
      />


      {/* <SearchBar /> */}
      { !searched ? 
      trails.map(trail => {
        return (
          
          <>
          {/* {axios.get(`/api/details/?id=${trail.id}`).then((response) => {
            console.log(response.data)
            // setOverall(response.data[0].average/2)
            
        }).catch((err) => {
            alert('Error');
            console.log(err);
        })} */}
         {/* {rating.map(rating => {
          return(
            <>
            
            </>
          )
          
        })}
         */}
          <div className="card gradient-border">
            <div className='cardHeader'>
            
            <h2 className='cardData'>{trail.trail_name}</h2>
            <h3 className='cardData'>- {trail.trail_city} -</h3>
                  <div className="starRating">
                  <ReactStars
                        count={5}
                        value={trail.average/2}
                        edit={false}
                        isHalf={true}
                        size={24}
                        activeColor="#ffd700"
                    />
                  </div>
            </div>
            <img className="card-img-top" height={250} width={300} src={trail.map_url}></img>
            <Link to={`/details/${trail.id}`}>
              <button id="home-btn" class="btn btn-info">Details</button>
            </Link>
            
        
          </div>
          </>
        )})
    
    :
    
    filtered.map(filter => {
      return(
        <div className="card gradient-border">
        <div className='cardHeader'>
        <h2 className='cardData'>{filter.trail_name}</h2>
        <h3 className='cardData'>- {filter.trail_city} -</h3>
        </div>
        <img className="card-img-top" height={250} width={300} src={filter.map_url}></img>
        <Link to={`/details/${filter.id}`}>
          <button id="home-btn" class="btn btn-info">Details</button>
        </Link>
        
    
      </div>
      )
    })
    
    } 



    </div>

    
    <div >

    <div>

      </div>
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
