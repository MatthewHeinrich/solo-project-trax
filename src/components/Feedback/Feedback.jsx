import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
import Conditions from '../Conditions/Conditions';
import Slider from '../Slider/Slider'

function FeedbackPage(props) {

    const dispatch = useDispatch();
    useEffect(() => { // getting movie details from database
        axios.get(`/api/feedback/${props.id}`).then((response) =>{
            console.log(response.data)
            setDetails(response.data)
        }).catch((err) =>{
            alert('Error');
            console.log(err);
        })
        
    }, []);

    let [details, setDetails] = useState({});
    let [flowy, setFlowy] = useState('');
    let [technical, setTechnical] = useState('');
    let [downhill, setDownhill] = useState('');
    let [climbing, setClimbing] = useState('');
    let [overall, setOverall] = useState('');
    //   const favorites = useSelector(store => store.getFavorites)
    // const feedback = useSelector(store => store.feedback)

    console.log(details)


    const gatherFeedack = () => {
        const feedback = {
            flowy: flowy,
            technical: technical,
            downhill: downhill,
            climbing: climbing,
            overall: overall
        }
    }
    
    return (
        <div className="container">
            <Conditions id={props}/>
        </div>
    );
}

export default FeedbackPage;