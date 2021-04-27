import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios'

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';


import Conditions from '../Conditions/Conditions';
import Feedback from '../Feedback/Feedback';
import DisplayData from '../DisplayData/DisplayData';
import './TrailDetails.css';

function TrailDetails(props) {
    let [overallAvg, setOverallAvg] = useState(0)
    let [details, setDetails] = useState([])
    const user = useSelector(store => store.user);
    // const data = useSelector(store => store)
    
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
    // console.log(details.length.flowy)

    const averageOverall = () => {
        let i = 0;
        let avg = 0
        for (i=0; i < details.length; i++) {
            console.log(details[i])
            avg += details[i].overall / details.length / 2
            console.log(avg)
        }
        
        return avg
        
    }
    
    
    
    const favorite = () =>{

        dispatch({type: 'ADD_FAVORITE', payload: [user, details] })
    }
    console.log('details', details[0]?.trail_id);
    // console.log(data);

    const CustomButton = withStyles({
        root: {
            background: "#f8be53",
            
            borderRadius: 3,
            border: 0,
            color: "white",
            height: 48,
            padding: "0 30px",
            boxShadow: "8px 8px 8px #888888;"
        },
        label: {
            textTransform: "capitalize"
        }
        })(props => <Button {...props} />);


    // renders genres, movie poster and description 
    return( 
        <>
        <div>
            {details.map(detail => (
                <> 
                </>
            ))}
            <div >
                    <h2 className="detailName">
                        {details[0]?.trail_name} 
                    </h2>
                    <h4 className="detailCity">
                        - {details[0]?.trail_city} -
                    </h4>
                    {/* <h4>
                        {details[0]?.overall}
                    </h4> */}
               {averageOverall()}
                    
                <img height={300} width={400} src={details[0]?.map_url}></img>
            <div class="details">
                <div class="buttons">
                <Link to={`/feedback/${details[0]?.trail_id}`}>
                    <button class="btn">Rate It</button>
                </Link>
                <button class="btn" onClick={favorite}>Favorite</button>
                </div>
            </div>
        </div> 
                <DisplayData data={details}/>
        </div>


        </>
    )
}

export default TrailDetails;