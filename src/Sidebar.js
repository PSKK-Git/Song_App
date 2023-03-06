import React from "react";
import "./Sidebar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SidebarOption from "./SidebarOption";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeOutlinedIcon} option="Home" />
      <SidebarOption Icon={SearchOutlinedIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicOutlinedIcon} option="Your Library" />       <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
      

    </div>
  );
}

export default Sidebar;