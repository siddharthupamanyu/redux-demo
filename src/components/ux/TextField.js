import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));


const TextField = ({ input, type, name, label, placeholder }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControl fullWidth className={classes.root}>
                <InputLabel shrink id={name}>
                    {label}
                </InputLabel>
                <Input
                    {...input}
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                />
            </FormControl>
        </div>
    );
};

export default TextField;