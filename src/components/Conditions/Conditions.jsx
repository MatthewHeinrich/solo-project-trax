
import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedWet: false,
    checkedTacky: false,
    checkedC: false,
    checkedD: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
//   const handleChangeWet = (event) => {
//     setWet({ ...wet, [event.target.name]: event.target.checked });
//   };
//   const [wet, setWet] = React.useState({
//       checkedWet: false
//   });
//   const handleChangeTacky = (event) => {
//     setTacky({ ...tacky, [event.target.name]: event.target.checked });
//   };
//   const [tacky, setTacky] = React.useState({
//       checkedTacky: false
//   });
console.log(state);
  return (
    <FormGroup row>
     
      <FormControlLabel
        control={<GreenCheckbox  onChange={handleChange} name="checkedWet" className="checkBox"/>}
        label="Custom color"
      />
         <FormControlLabel
        control={<GreenCheckbox  onChange={handleChange} name="checkedTacky" className="checkBox"/>}
        label="Custom color"
      />
         <FormControlLabel
        control={<GreenCheckbox  onChange={handleChange} name="checkedC" className="checkBox"/>}
        label="Custom color"
      />
         <FormControlLabel
        control={<GreenCheckbox  onChange={handleChange} name="checkedD" className="checkBox"/>}
        label="Custom color"
      />
         <FormControlLabel
        control={<GreenCheckbox  onChange={handleChange} name="checkedG" className="checkBox"/>}
        label="Custom color"
      />
         <FormControlLabel
        control={<GreenCheckbox  onChange={handleChange} name="checkedG" className="checkBox"/>}
        label="Custom color"
      />
      
    </FormGroup>
  );
}