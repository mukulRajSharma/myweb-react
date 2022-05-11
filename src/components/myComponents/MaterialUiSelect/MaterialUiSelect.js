// import * as React from 'react';
import React, { useRef } from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Button, Divider, Input, Typography,Grid } from '@mui/material';
import Icon from '../../Iconify';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    // autoFocus:false,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: '35%',
    },
  },
};

const defaultNames = [
  'MEDICAL IMAGING',
  'LEGAL',
  'PARAMEDIC',
  'DENTIST',
  'PHYSICIAN',
  'X RAY'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [names, setNames] = React.useState(defaultNames);
  const [inputError, setInputError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const valueRef = useRef('')

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setInputError(false);
  };
  
  function handleInputEnter(e) {
      if (e.key==='Enter') {
        if (/^[a-zA-Z ]*$/.test(valueRef.current.value)) {
            if (!names.includes(valueRef.current.value)) {
                setNames([...names, valueRef.current.value])
                setInputError(false);
            }
            else {
                setInputError(true);
                setErrorMessage('Value Already Exists!');
            }
        }
        else {
            setInputError(true);
            setErrorMessage('Only Aplhabetical Values Allowed!');
        }
      }
  }

  function handleDelete (value) {
      const newlist = personName.filter((item) => item !== value);
      setPersonName(newlist);
      setInputError(false);
  }

  return (
      <Grid width={'100%'}>
          <div>
      <FormControl sx={{ m: 1, width: '100%' }}>
        <InputLabel error={inputError} sx={{'marginTop':0.7,'marginLeft':-0.2, 'padding':0}}>Search</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input error={inputError} sx={{border: inputError?'1.5px solid red':'1.5px solid lightgrey', borderRadius: '2px', 'margin':0, padding:0}} disableUnderline/>}
          renderValue={(selected) => {
              if (selected.length>3){
                  return(
                    <div>
                        <Chip icon={<LocalOfferIcon sx={{'fill':'white'}}/>} key={selected[0]} label={selected[0]} sx={{'color':'white', 'background':'#6C757D', 'marginLeft':0.5}}/>
                        <Chip key="randomTag" label={<span>{selected.length-1}+</span>} sx={{'color':'white', 'background':'#6C757D', marginLeft:'5px'}}/>
                    </div>
                  )
              }
              return(
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip icon={<LocalOfferIcon sx={{'fill':'white'}}/>} key={value} label={value} sx={{'color':'white', 'background':'#6C757D', 'marginLeft':0.5}}/>
              ))}
            </Box>
          )}}
          MenuProps={MenuProps}
          rows={1}
        >
            <div style={{'marginLeft':'4%'}}>
            {personName.map((value) => (
                <Chip icon={<LocalOfferIcon sx={{'fill':'white'}}/>} key={value} label={value} onDelete={()=>{handleDelete(value)}} sx={{'margin':'5px','color': 'white', 'background':'#6C757D'}}/>
              ))}
              <br></br>
              <Button onClick={()=>{
                setPersonName([])
                setInputError(false)
                }}>Unselect All</Button>
            </div>
            
            <Divider sx={{'width': '90%', 'marginLeft': '5%', 'marginTop':'5px', 'marginBottom':'5px'}}/>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              <Chip icon={<LocalOfferIcon sx={{'fill':'#6C757D'}}/>} key={name} label={name} sx={{'color': '#6C757D', 'background':'#F8F9FA'}}/>
            </MenuItem>
          ))}
            <Divider sx={{'width': '90%', 'marginLeft': '5%', 'marginTop':'5px', 'marginBottom':'5px'}}/>
          <Input inputRef={valueRef} placeholder='Create New' disableUnderline={true} sx={{'marginLeft': '5%'}} autoFocus={true} onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                  handleInputEnter(e)
                }
              }}/>
        </Select>
      </FormControl>
      <br></br>
      <div style={{'marginLeft':'2%'}}>
        {inputError &&
            <Typography color={'red'}>
                <Icon icon="bi:exclamation-diamond-fill" color="red" height='2vh'/> {errorMessage}
            </Typography>
        }
      </div>

    </div>
      </Grid>
    
  );
}
