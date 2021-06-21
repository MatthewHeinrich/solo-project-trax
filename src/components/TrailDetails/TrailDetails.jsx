import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DisplayData from '../DisplayData/DisplayData';
import Forecast from '../Forecast/Forcast';
import './TrailDetails.css';

function TrailDetails(props) {
    let [overall, setOverall] = useState(0)
    let [details, setDetails] = useState([])
    const user = useSelector(store => store.user);
    // const data = useSelector(store => store)
   
    // const notify = () => toast("Added to Favorites");
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`/api/details/${props.id}`).then((response) => { // gets details trail by 'id'
            console.log(response.data)
            setDetails(response.data)
            // dispatch({type:"GET_RATING", payload: overall})
        }).catch((err) => {
            alert('Error');
            console.log(err);
        }),
        axios.get(`/api/details/?id=${props.id}`).then((response) => {
            console.log(response.data)
            setOverall(response.data[0].average/2)
            
        }).catch((err) => {
            alert('Error');
            console.log(err);
        })

    }, []);

    console.log(props)
    console.log(user)
    // console.log(details.length.flowy)

   
    // console.log(avg)

    const favorite = () => {
        
        dispatch({ type: 'ADD_FAVORITE', payload: [user, details] })

        toast.warning('Added to Favorites!', { // toast alert for adding trail to favorites
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    console.log('details', details[0]?.trail_id);
    // console.log(data);


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const averageOverall = () => {
        let i = 0;
        let avg = 0
        for (i = 0; i < details.length; i++) {
            console.log(details[i])
            avg += details[i].overall / details.length / 2
            console.log(avg)
            // setOverallAvg(avg)
        }
        
        return avg
        
    }

    const openStatus = () =>{
        let i=0
        let openNum = 0
        for(i=0; i<details.length; i++){
            if(details[i].open === true){
                return "Open"
            } else {
                return "Closed"
            }
        }
    }
    const conditionStatus = () => {
        let i = 0
        for(i=0; i<details.length; i++){
            if(details[i].wet === true){
                return "Wet"
            } else if (details[i].dry === true){
                return "Dry"
            } else if (details[i].tacky === true){
                return "Tacky"
            } else if (details[i].perfect === true){
                return "Perfect"
            } else {
                return ""
            }
        }
    }


    let rating = averageOverall()
    console.log(details[0]?.open)
    console.log(overall)
    let test = 2.5
    // renders genres, movie poster and description 
    return (
        <>
        <ToastContainer />
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
                    {/* {averageOverall()} */}
                    <div className="detailStatus">
                    
                        <span className="openStatus">{openStatus()}</span> 
                        {overall && 
                        <ReactStars
                            count={5}
                            value={overall}
                            edit={false}
                            isHalf={true}
                            size={24}
                            activeColor="#ffd700"
                        /> }
                        <span className="condition">{conditionStatus()}</span>
                    </div>
                
                    <img className="detailImg" height={300} width={400} src={details[0]?.map_url}></img>
                    <div className="status">
                    
                    </div>
                    <div className="trailLength">
                        Distance: <span className="length">{details[0]?.length}</span> Miles
                    </div>
                    <div class="details">
                        <DisplayData data={details} />
                    </div>
                    
                </div>
                <div class="buttons">
                    <Link to={`/feedback/${details[0]?.trail_id}`}>
                        <button id="rateBtn" class="btn">Rate It</button>
                    </Link>
                    <button id="favItBtn" class="btn" onClick={() => {favorite()}}>Favorite</button>
                    
                </div>
                <div>
                    <Forecast />
                </div>
            </div>



        </>
    )
}

export default TrailDetails;