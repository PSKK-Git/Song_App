import React from "react";
import "./Body.css";
import Header from "./Header";
import LyricsIcon from '@mui/icons-material/Lyrics';

import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

import FavoriteIcon from '@mui/icons-material/Favorite';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      
    </div>
  )
}

export default Body
