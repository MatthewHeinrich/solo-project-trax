
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Conditions.css'
import Slider from '../Slider/Slider'

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


export default function CheckboxLabels(props) {
    useEffect(() => {
        styles 
    })
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.id)
    const data = useSelector(store => store.data);
    console.log(user)
    console.log(props.data)
    // const trailId = props.id.id
    const styles = props
    const [style, setStyle] = useState({})
    const [state, setState] = React.useState({
        checkedWet: false, 
        checkedTacky: false,
        checkedPerfect: false,
        checkedDry: false,
        checkedOpen: false,
        checkedClosed: false,
        user: user,
    });
    const trailData = { // object containing user feedback
        conditions: state,
        styles: styles,
    }

    const handleChange = (event) => {

        setState({ ...state, [event.target.name]: event.target.checked });

    };
    

    const sendFeedback = () => {

        dispatch({ type: 'SEND_FEEDBACK', payload: trailData })
        toast.warning('Thanks for the Feedback!', { // toast alert for leaving feedback
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    console.log(props)
    console.log(state);
    console.log(props.data)
    console.log(trailData)
    return (
        <>
            {/* <Slider id={props}/> */}
            <h3 className="conditions">Conditions</h3>
            <FormGroup row>
                {/* <FormLabel component="legend">Conditions Feedback   </FormLabel> */}

                <FormControlLabel
                    control={<GreenCheckbox onChange={handleChange} name="checkedWet" className="checkBox" />}
                    label="Wet"
                />
                <FormControlLabel
                    control={<GreenCheckbox onChange={handleChange} name="checkedTacky" className="checkBox" />}
                    label="Tacky"
                />
                <FormControlLabel
                    control={<GreenCheckbox onChange={handleChange} name="checkedPerfect" className="checkBox" />}
                    label="Perfect"
                />
                <FormControlLabel
                    control={<GreenCheckbox onChange={handleChange} name="checkedDry" className="checkBox" />}
                    label="Dry"
                />
                <div className="lineSegment"></div>
                <FormControlLabel
                    control={<GreenCheckbox onChange={handleChange} name="checkedOpen" className="checkBox openClose" />}
                    label="Open"
                />
                <FormControlLabel
                    control={<GreenCheckbox onChange={handleChange} name="checkedClosed" className="checkBox openClose" />}
                    label="Closed"
                />

            </FormGroup>
            <button onClick={() => {sendFeedback()}} id="submit-btn" class="btn btn-info" >Submit</button>
            <ToastContainer />
        </>
    );
}