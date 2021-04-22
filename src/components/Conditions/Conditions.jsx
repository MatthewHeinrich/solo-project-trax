
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import './Conditions.css'

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
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.id)

    console.log(user)
    console.log(props.id.id)
    const trailId = props.id.id

    const [state, setState] = React.useState({
        checkedWet: false,
        checkedTacky: false,
        checkedPerfect: false,
        checkedDry: false,
        checkedOpen: false,
        checkedClosed: false,
        trail: trailId,
        user: user,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const sendFeedback = () => {
        dispatch({ type: 'SEND_FEEDBACK', payload: state })
    }

    console.log(state);
    return (
        <>
            <FormGroup row>
                <FormLabel component="legend">Conditions Feedback   </FormLabel>

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
                <FormControlLabel
                    control={<GreenCheckbox onChange={handleChange} name="checkedOpen" className="checkBox" />}
                    label="Open"
                />
                <FormControlLabel
                    control={<GreenCheckbox onChange={handleChange} name="checkedClosed" className="checkBox" />}
                    label="Closed"
                />

            </FormGroup>
            <button onClick={sendFeedback} id="home-btn" class="btn btn-info" >Submit</button>
        </>
    );
}