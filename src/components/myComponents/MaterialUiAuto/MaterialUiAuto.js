import * as React from 'react';
import Chip from '@mui/material/Chip';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Input } from '@mui/material';

export default function MaterialUiAuto() {
  return (
    <Autocomplete
    //   id="country-select-demo"
      multiple
      options={countries}
      autoHighlight
    //   getOptionLabel={(option) => option.label}
      
    //   renderOption={(props, option) => {
    //       return(
    //         <Chip component="li" icon={<LocalOfferIcon/>} label={option.label} sx={{'color':'#6C757D', 'background':'#F8F9FA', 'margin':'8px', 'width':'max-content'}} {...props}/>
    //       )
    //   }}
    
        renderOption={() => {
            const listItems = countries.map((country)=>(
                <Chip icon={<LocalOfferIcon/>} label={country.label}/>
            ))
            return (
                <div>
                    {listItems}
                    <Input/>
                </div>
            )
        }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}

      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip variant="filled" label={option.label} icon={<LocalOfferIcon sx={{fill:'white'}}/>} sx={{'color': 'white', 'background':'#6C757D'}} {...getTagProps({ index })} />
        ))
      }
    />
  );
}

const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268',
  },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
];
