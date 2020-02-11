import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));


const SelectField = ({ input, name, label }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControl fullWidth>
                <InputLabel shrink id="author">
                    {label}
                </InputLabel>
                <Select
                    {...input}
                    id={name}
                >
                    <MenuItem value={'Muskan'}>Muskan</MenuItem>
                    <MenuItem value={'Siddharth'}>Siddharth</MenuItem>
                    <MenuItem value={'Prateek'}>Prateek</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectField;