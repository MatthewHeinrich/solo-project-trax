import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import axios from 'axios'

import Conditions from '../Conditions/Conditions';
import Feedback from '../Feedback/Feedback';

function TrailDetails(props) {

    let [details, setDetails] = useState([])
    const user = useSelector(store => store.user);
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

    // const description = useSelector( (store) =>{
    //     console.log('use selector:', store.movies)
    //     return store.movies
    // })
    
    console.log(props)
    
    const favorite = () =>{
        // console.log('trying to favorite')
        // axios.post('/api/trails', trail).then((res) =>{
        // res.send(props)
        // }).catch((err) =>{
        //     console.log(err)
        // })

        dispatch({type: 'ADD_FAVORITE', payload: [user, details] })
    }
    console.log(details);

    // renders genres, movie poster and description 
    return( 
        <>
        <div>
            {details.map(detail => (
                <> 
                    <h3>
                        {detail.trail_name} 
                    </h3>
                    <h4>
                        {detail.trail_city}
                    </h4>
                    <h4>
                        {detail.technical}
                    </h4>
                </>
            ))}
                
                <img height={300} width={300} src={details[0]?.map_url}></img>
                {/* <Conditions /> */}
                <Feedback />
        </div>
        <div class="details">
                <button id="home-btn" class="btn btn-info" onClick={favorite}>Favorite</button>
        </div> 

        </>
    )
}

export default TrailDetails;