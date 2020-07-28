import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display:'flex',
    minHeight:650,
    
  },
  
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: 20,
    backgroundColor:'lightgrey',
  },
  
}));

export default function Page2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Typography variant='h6'>
      <Grid container spacing={4} style={{backgroundColor:'white', overflow:'hidden', display:'flex', marginTop:20, height:550}} justify="space-around">
        <Grid item xs={5} style={{marginLeft:20}}>
          <Paper className={classes.paper} style={{marginLeft:70, height:500}}>
            <h3> What we’re great at </h3>
            <p>
              Fourteen years and 400+ finished web projects have gifted us a
              unique experience on how to create something that is easy to use,
              looks great and earns a profit for your company.
            </p>
            <Button variant='contained'>EXPLORE FULL SERVICES</Button>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{marginRight:30, overflowY:"scroll", overflowX:"hidden", flexGrow:1, height:600}}>
          <Paper className={classes.paper} >
            <h3>DESIGN AND UI/UX</h3>
            <p>
              You need a user-friendly, clear, visually satisfying and easy-to-
              understand web solutions that create positive emotions for your
              prospects. You need UI and UX. We can do that.
            </p>
            <Button>
              Read more
              <ArrowForwardIcon />
            </Button>
          
          <h3>WEB DESIGN AND DEVELOPMENT</h3>
            <p>
            Your website has to look delightful to the eye. It must be handsome.
            It’s your virtual business card and your sales channel.
            </p>
            <Button>
              Read more
              <ArrowForwardIcon />
            </Button>
          
          <h3>CUSTOM SOLUTIONS</h3>
            <p>
            You might even need a custom-made software to enhance your
            customer experience even further.
            We can do it. We create multifunctional software using
            Laravel, React.js, Vue.js and based on best practices of 
            user experience and design.
            </p>
            <Button>
              Read more
              <ArrowForwardIcon />
            </Button>
          </Paper>
        </Grid>
      </Grid>
      </Typography>
    </div>
  );
}
