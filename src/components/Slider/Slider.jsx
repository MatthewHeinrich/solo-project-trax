// import React from 'react';
// import Subheader from 'material-ui/Subheader';
// import Slider from 'material-ui-slider-label/Slider';
// import { cyan500 } from 'material-ui/styles/colors';

// const styles = {
//     subheader: {
//         textTransform: 'capitalize',
//     },
//     labelStyleOuter: {
//         width: '30px',
//         height: '30px',
//         borderRadius: '50% 50% 50% 0',
//         background: cyan500,
//         position: 'absolute',
//         transform: 'rotate(-45deg)',
//         top: '-40px',
//         left: '-9px',
//     },
//     labelStyleInner: {
//         transform: 'rotate(45deg)',
//         color: 'white',
//         textAlign: 'center',
//         position: 'relative',
//         top: '3px',
//         right: '0px',
//         fontSize: '10px',
//     },
// };

// const SearchRadiusInput = ({ radius, onChange }) => (
//     <div>
//         <Subheader style={styles.subheader}>
//             {'Search radius'}
//         </Subheader>
//         <Slider
//             defaultValue={5 / 100}
//             min={0}
//             max={1}
//             step={5 / 100}
//             value={radius / 100}
//             onChange={onChange}
//             label={
//                 <div style={styles.labelStyleOuter}>
//                     <div style={styles.labelStyleInner}>
//                         {radius}
//                     </div>
//                 </div>
//             }
//         />

//     </div>
// );

// export default SearchRadiusInput;


// import React, {useState} from 'react';
// import PropTypes from 'prop-types';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Slider from '@material-ui/core/Slider';
// import Typography from '@material-ui/core/Typography';
// import Tooltip from '@material-ui/core/Tooltip';

//  const PrettoSlider = withStyles({
//     root: {
//       color: '#52af77',
//       height: 8,
//     },
//     thumb: {
//       height: 24,
//       width: 24,
//       backgroundColor: '#fff',
//       border: '2px solid currentColor',
//       marginTop: -8,
//       marginLeft: -12,
//       '&:focus,&:hover,&$active': {
//         boxShadow: 'inherit',
//       },
//     },
//     active: {},
//     valueLabel: {
//       left: 'calc(-50% + 4px)',
//     },
//     track: {
//       height: 8,
//       borderRadius: 4,
//     },
//     rail: {
//       height: 8,
//       borderRadius: 4,
//     },
//   })(Slider);

//   export default PrettoSlider;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { ThemeProvider } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import './Slider.css'

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#52af77',
        width: 300,
    },
    //   margin: {
    //     height: theme.spacing(3),
    //   },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    }
}));




function valuetext(value) {
    return value;
}

export default function DiscreteSlider(props) {
    const user = useSelector(store => store.user)

    const classes = useStyles();
    let [flowy, setFlowy] = useState(0)
    let [technical, setTechnical] = useState(0)
    let [downhill, setDownhill] = useState(0)
    let [climbing, setClimbing] = useState(0)
    let [overall, setOverall] = useState(0)

    const trailId = (props.id.id)

    const data = {
        flowy: flowy,
        technical: technical,
        downhill: downhill,
        climbing: climbing,
        overall: overall,
        user: user,
        trail: trailId
    }
    //   console.log(props.data)
    console.log(data)
    console.log(user)
    console.log(trailId)

    const handleFlowChange = (event, newValue) => {
        setFlowy(newValue);
    };
    const handleTechChange = (event, newValue) => {
        setTechnical(newValue);
    };
    const handleDownChange = (event, newValue) => {
        setDownhill(newValue);
    };
    const handleClimbChange = (event, newValue) => {
        setClimbing(newValue);
    };
    const handleOverallChange = (event, newValue) => {
        setOverall(newValue);
    };

    return (
        <div className={classes.root}>
            <h2 className="feedHead">Feedback</h2>
            {/* <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography> */}
            Flowy
            <Slider
                
                max={10}
                min={0}
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
                aria-labelledby="discrete-slider-always"
                step={1}
                valueLabelDisplay={valuetext}
                onChange={handleFlowChange}
            />
            Technical
            <Slider
                max={10}
                min={0}
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
                aria-labelledby="discrete-slider-always"
                step={1}
                valueLabelDisplay={valuetext}
                onChange={handleTechChange}
            />
            Downhill
            <Slider
                max={10}
                min={0}
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
                aria-labelledby="discrete-slider-always"
                step={1}
                valueLabelDisplay={valuetext}
                onChange={handleDownChange}
            />
            Climbing
            <Slider
                max={10}
                min={0}
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
                aria-labelledby="discrete-slider-always"
                step={1}
                valueLabelDisplay={valuetext}
                onChange={handleClimbChange}
            />
            <strong>Overall</strong>
            <Slider
                trackColor="green"
                max={10}
                min={0}
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
                aria-labelledby="discrete-slider-always"
                step={1}
                valueLabelDisplay={valuetext}
                onChange={handleOverallChange}
            />
        </div>
    );
}