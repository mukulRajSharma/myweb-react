import React from 'react';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function MultipleSelect() {
    return (
        <div style={{'marginLeft':'1.5%'}}>
            <Typography>
                <ul><b><u>Functionality</u></b></ul>
                <FormControlLabel
                    label="Dropdown"
                    control={
                        <Checkbox
                        checked={true}
                        color="success"
                        />
                    }
                />
                <FormControlLabel
                    label="Tag 4+"
                    control={
                        <Checkbox
                        checked={true}
                        color="success"
                        />
                    }
                />
                <FormControlLabel
                    label="Errors (when input is non-alpha or pre-existing)"
                    control={
                        <Checkbox
                        checked={true}
                        color="success"
                        />
                    }
                />
                <FormControlLabel
                    label="Unselect All"
                    control={
                        <Checkbox
                        checked={true}
                        color="success"
                        />
                    }
                />
                <FormControlLabel
                    label="Create New"
                    control={
                        <Checkbox
                        checked={true}
                        color="success"
                        />
                    }
                />
                <FormControlLabel
                    label="Delete on arrow click"
                    control={
                        <Checkbox
                        checked={false}
                        color="error"
                        />
                    }
                />
                <FormControlLabel
                    label="Clear all in input box"
                    control={
                        <Checkbox
                        checked={false}
                        color="error"
                        />
                    }
                />
            </Typography>
            <br></br>
            <Typography>
            <ul><b><u>Style</u></b></ul>
                <FormControlLabel
                    label="Colors"
                    control={
                        <Checkbox
                        checked={true}
                        color='success'
                        />
                    }
                />
                <FormControlLabel
                    label="Labels"
                    control={
                        <Checkbox
                        checked={true}
                        color='success'
                        />
                    }
                />
                <FormControlLabel
                    label="Icons"
                    control={
                        <Checkbox
                        checked={true}
                        color='success'
                        />
                    }
                />
                <FormControlLabel
                    label="Placeholder"
                    control={
                        <Checkbox
                        checked={false}
                        color='error'
                        />
                    }
                />
                <FormControlLabel
                    label="Cross arrow"
                    control={
                        <Checkbox
                        checked={false}
                        color='error'
                        />
                    }
                />
            </Typography>
            <br></br>
        </div>
    );
}