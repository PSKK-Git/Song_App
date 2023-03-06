import React from 'react'
import './Header.css';

import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from "react";


function Header() {
  return (
    <div className="header">
    <div className="header__left">
      <SearchIcon />
      <input
        placeholder="Search for Artists, Songs, or Podcasts "
        type="text"
      />
    </div>
    <div className="header__right">
      <Avatar alt="pp" src="https://pixabay.com/photos/peacock-zeal-male-nice-plumage-2493865/" />
      <h4>"Karthik</h4>
    </div>
  </div>
);
}

export default Header