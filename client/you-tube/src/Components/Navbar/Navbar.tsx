import React, {useState} from 'react';
import "./Navbar.css";
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
const Navbar: React.FC = () => {
  const[loggedIn, setLoggedIn] = useState(false)
    return (
        <div className="navbarContainer"> 
        <div className="left">
          <button id="sidebar-toggle">
            <MenuIcon id="icon" />
            </button>
        
          <YouTubeIcon id="youtube-icon" style={{color:"red"}} />
          <h2>YouTube</h2>
        </div>
        <div className="center">
         <input id="searchBar" placeholder="Search" />
         <button id="searchButton" style={{color:"gray"}}>
         <SearchIcon />
         </button>



        </div>
        <div className="right">
          
         <button id="createVideo" style={{color:"gray"}}> <AddBoxIcon /> </button>
         
        {loggedIn ? (
         <button id="profilePic"> </button>

        ):(
          <button id = "sign-in">SignIn </button>
        )}
        
          
          </div> 
        </div>
    )
}

export default Navbar


