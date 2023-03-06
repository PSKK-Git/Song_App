import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Grid from '@mui/material/Grid';
import ColorSlider from './Slider';

function Footer() {
  return (
    <div className="footer">
      
          <div className="footer__left">
              <img
                className="footer__albumLogo"
                src="https://cdn.pixabay.com/photo/2017/07/04/23/12/bridge-2472983__480.jpg"
                alt=""
              />

            <div className="footer__songInfo">
              <h4>Oh Yay!</h4>
              <p>KArthik....</p>
            </div>
         </div>

         <div className="footer__center">
                  <ShuffleIcon className="footer__green" />
             <SkipPreviousIcon className="footer__icon" />
            <PlayCircleOutlineIcon

                fontSize="large"
                className="footer__icon"
              />

            <SkipNextIcon className="footer__icon" />

            <ReplayIcon className="footer__green" />
          </div>

          <div className="footer__right">
              <Grid container spacing={2}>
              <Grid item>
                <PlaylistPlayIcon />
              </Grid>
              <Grid item>
                <VolumeDownIcon />
              </Grid>
              <Grid item xs>
                <ColorSlider />
              </Grid>
            </Grid>
          </div>
      

    </div>
    
  )
}

export default Footer
