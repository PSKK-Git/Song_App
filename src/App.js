import React, { useEffect, useState } from "react";
import './App.css';
import './Login';
import Login from './Login';
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from "./spotify";
import Player from './Player';
import { useDataLayerValue } from "./DataLayer";

const s = new SpotifyWebApi();

function App() {
  const [token,setToken]=useState(null);
  const [ {user} , dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      s.setAccessToken(_token);

      dispatch({
        type:"SET TOKEN",
        token:_token,
      });
      
      

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      s.getMe().then((user) => {
        console.log("im heeeeheheh",user);
        });   

        s.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists,
          });
        });
    }
    
  }, []);




  return (
    <div className="app">
      {
        token ? 
        <Player spotify={s}/>
        : <Login/>}
    </div>
  );
}

export default App;
