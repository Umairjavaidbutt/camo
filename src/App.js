import React from 'react';
import './App.css';
import ElevateAppBar from './components/Appbar';
import { Buttons } from './components/Buttons';
import { Typography, CssBaseline, Fade, useScrollTrigger } from '@material-ui/core';
import {ReactComponent as Logo} from './components/Animate.svg'
import Page2 from './components/Page2'

const Scroll =props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
  <Fade in={trigger} >
    {props.children}
  </Fade>
  )
}


function App(props) {
  return (
    <div className="App">
      <ElevateAppBar/>
      <div className='display'>
        <Typography className='text' variant='h6'>
          <h2>Your web presence just got so much better</h2>
          <p>Your company’s website isn’t just a digital business card or a few brush strokes here and there. It’s an essential sales channel, and it has rules. You need it to survive in the jungle of business.</p>
          <Buttons />
          </Typography>

            <CssBaseline />
            <Scroll>
              <Logo className='logo'/>
            </Scroll>
      </div>
      <Page2/>
      
    </div>
  );
}

export default App;
