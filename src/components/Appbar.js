import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';
import { Button, ButtonGroup } from '@material-ui/core';
import SplitButton from './SplitButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  buttonGroup: {
    marginLeft:200,
    padding:20,
    
  },
  
    
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "white" : "rgb(95, 86, 86)",
      color: trigger ? "black" : "white",
    }
  });
}

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  

  return (
    
    <div className={classes.grow}>
      <CssBaseline />
      <ElevationScroll {...props}>
      <AppBar position="sticky" color='transparent'>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            CAMO
          </Typography>
            <ButtonGroup className={classes.buttonGroup}>
          <Button color="inherit" >SERVICES</Button>
          <Button color="inherit" >ABOUT US</Button>
          <Button color="inherit" >PROJECTS</Button>
          <Button color="inherit" >BLOG</Button>
          </ButtonGroup>

          <SplitButton className={classes.buttonGroup}/>
          
          <div className={classes.grow} />
          <Box component="span" m={2} border={1} p={1}>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <MailIcon />
            </IconButton>
            <span>GET IN TOUCH</span>
            </Box>

          
        </Toolbar>
      </AppBar>
      </ElevationScroll>
    </div>
  );
}
