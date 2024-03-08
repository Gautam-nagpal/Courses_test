import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioBtn(props) {
    const { title = "Virtual Course", checked = false } = props
    return (
        <FormControl component="fieldset">
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                    value="end"
                    control={<Radio color="primary" checked={checked} />}
                    label={title} className='radio-btn-label'
                />
            </RadioGroup>
        </FormControl>
    );
}