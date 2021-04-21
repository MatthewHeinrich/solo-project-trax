import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function FeedbackPage(props) {
    const dispatch = useDispatch();
    let [feedback, setFeedback] = useState([])
    //   const favorites = useSelector(store => store.getFavorites)
    // const feedback = useSelector(store => store.feedback)
    console.log(props.id)
    // useEffect(() => { 
    //     axios.get(`/api/feedback/${props.id}`).then((response) =>{
    //         console.log(response.data)
    //         setFeedback(response.data)
    //     }).catch((err) =>{
    //         alert('Error');
    //         console.log(err);
    //     })
        
    // }, []);
    // useEffect(() => {
    //     dispatch({ type: 'FETCH_FEEDBACK', payload: props.trail_id})
    //     console.log(props.trail_id)
    // }, [])
    return (
        <div className="container">
            {/* {feedback.map(feedback => {
                return (

                    <h4>{feedback.flowy}</h4>

                )
            })} */}
        </div>
    );
}

export default FeedbackPage;