import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function ButtonComponent(props) {
    const classes = useStyles();
    const iconEnum = {Delete: <DeleteIcon />, Add: <AddIcon />, Edit: <EditIcon />};
    Object.freeze(iconEnum);

    const handleClick = () => {
        props.onClick();
    }

    return (
        <React.Fragment>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={
                    props.type === "Delete" ? iconEnum.Delete : (
                        props.type === "Add" ? iconEnum.Add : iconEnum.Edit
                    )
                }
                onClick={handleClick} 
            >
                {props.type}
            </Button>
        </React.Fragment>
    );

}

export default ButtonComponent;