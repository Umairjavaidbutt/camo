import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: 'gray',
      padding :10,
      margin: 10,
      width: 200,

      '&:hover': {
        backgroundColor:'white',
        
      }
      
    },
    
}));

export const Buttons = () => {
    const classes = useStyles();

    return (
            <ButtonGroup>
            <Button className={classes.button} 
             variant='outlined'>WORK WITH US</Button>
            <Button className={classes.button}
             variant='outlined'>VIEW OUR PROJECTS</Button>
             </ButtonGroup>
        
    )
}
