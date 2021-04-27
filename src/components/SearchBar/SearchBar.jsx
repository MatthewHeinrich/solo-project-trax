import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import UserPage from '../UserPage/UserPage'
import './SearchBar.css'

const SearchBar = ({ keyword, setKeyword }) => {
    const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
    const trails = useSelector((store) => store.trails)

    let search = '';
    // this is the local state for the list of sna objects that matched the search
    const [filtered, setFiltered] = useState([]);
    // this stores whether or not a search has happened 
    const [searched, setSearched] = useState(false);
    // conditionally renders the list of all natural areas or the filtered natural areas
    const displayList = () => {
        let display = <UserPage trails={trails} />
        if( searched ) {
            display = <UserPage trails={filtered} />
        }
        return display;
    }
    // handles search f
    const searchForNaturalArea = (e) => {
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
            setFiltered(trails.filter( trail => (trail.trail_name + ' ' + trail.mapUrl).match(regex)))
            console.log(filtered);
            // set the search state to the opposite of what it was
            setSearched(true);
        } else {
            setSearched(false);
        }
    }

    return (
        <div>
        <input
            className="searchBar"
            style={BarStyling}
            key="random1"
            value={keyword}
            placeholder={"search trails"}
            onChange={(e) => searchForNaturalArea(e)}
        />
        
        {/* {trails.length && displayList()} */}
        {displayList}
        </div>
    );
}

export default SearchBar