import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom';
import axios from 'axios'

function TrailDetails(props) {

    let [details, setDetails] = useState([])
    const history = useHistory();

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
        axios.post('/api/trails').then(res =>{
        
        }).catch((err) =>{
            console.log(err)
        })
    }
    

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
                </>
            ))}
                
                <img height={300} width={300} src={details[0]?.map_url}></img>
                
        </div>
        <div class="details">
                <button id="home-btn" class="btn btn-info" onClick={favorite}>Favorite</button>
        </div> 

        </>
    )
}

export default TrailDetails;