import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios'

import Conditions from '../Conditions/Conditions';
import Feedback from '../Feedback/Feedback';
import DisplayData from '../DisplayData/DisplayData';

function TrailDetails(props) {

    let [details, setDetails] = useState([])
    const user = useSelector(store => store.user);
    const data = useSelector(store => store)
    
    const dispatch = useDispatch();

    useEffect(() => { 
        axios.get(`/api/details/${props.id}`).then((response) =>{
            console.log(response.data)
            setDetails(response.data)
        }).catch((err) =>{
            alert('Error');
            console.log(err);
        })
        
    }, []);

    console.log(props)
    console.log(user)

    const favorite = () =>{

        dispatch({type: 'ADD_FAVORITE', payload: [user, details] })
    }
    console.log('details', details[0]?.trail_id);
    console.log(data);

    // renders genres, movie poster and description 
    return( 
        <>
        <div>
            {details.map(detail => (
                <> 
                </>
            ))}
                    <h3>
                        {details[0]?.trail_name} 
                    </h3>
                    <h4>
                        {details[0]?.trail_city}
                    </h4>
                    <h4>
                        {details[0]?.overall}
                    </h4>
                <img height={300} width={300} src={details[0]?.map_url}></img>
                <div class="details">
                <Link to={`/feedback/${details[0]?.trail_id}`}>
                    <button id="home-btn" class="btn btn-info">Rate It</button>
                </Link>
                <button id="home-btn" class="btn btn-info" onClick={favorite}>Favorite</button>
                
        </div> 
                <DisplayData data={details}/>
        </div>


        </>
    )
}

export default TrailDetails;