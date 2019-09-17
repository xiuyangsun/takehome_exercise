import React from "react";
//import { makeStyles } from "@material-ui/core/styles";

import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    '& > .fa': {
      margin: theme.spacing(2),
    },
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },
}));

const Switch = props => {
  //const { direction, disabled } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Button variant="outlined" color="primary">
        <Icon className="fa fa-plus-circle" />
      </Button>
    </div>  
  )
  
};

export default Switch;
