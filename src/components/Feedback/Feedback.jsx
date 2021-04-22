import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

// import TrailDetails from '../TrailDetails/TrailDetails';
// import Slider from '../Slider/Slider';
// import './Feedback.css'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Conditions from '../Conditions/Conditions';


// import {
//     Slider,
//     SliderInput,
//     SliderTrack,
//     SliderRange,
//     SliderHandle,
//     SliderMarker,
// } from "@reach/slider";
// import "@reach/slider/styles.css";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

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

            {/* <Slider /> */}

            {/* <SliderInput>
                <SliderTrack>
                    <SliderRange />
                    <SliderMarker min={0} max={10} step={.5} />
                    <SliderHandle />
                </SliderTrack>
            </SliderInput> */}
        
            {/* <Slider flowy={flowy} onChange={(event) => setFlowy(event.target.value)}  min={0} max={10} step={1}/> */}
            {/* <div>
                <h4 class="type">Flowy</h4>
                <Slider class="slider" min={0} max={10} > 
                    {new Array(11).fill("x").map((x, index) => (
                        <SliderMarker value={index + 1} onChange={(event) => setFlowy(event.target.value)}>
                            <h4>{flowy}</h4>
                        <h4 class="sliderValue">{index + 1}</h4>
                        </SliderMarker>
                    ))}
                </Slider>
            </div> */}
            <Slider />
            <Conditions />
        </div>
    );
}

export default FeedbackPage;