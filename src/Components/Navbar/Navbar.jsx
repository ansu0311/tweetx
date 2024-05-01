import React from 'react'
import "./Navbar.scss"
import Dark from '../Dark/Dark'

const Navbar = ({toggleDarkMode,loggedin,setPage,page}) => {

  return (
    <div className={`Navbar ${loggedin?"":"hide"}`}>
        <div className="logo">TweetX</div>
        <div className="NavLinks">
            <li className={`NavLink ${page === "feed"?"active":""}`} onClick={()=>setPage("feed")} >Feed</li>
            <li className={`NavLink ${page === "user"?"active":""}`} onClick={()=>setPage("user")} >Users</li>
            <li className={`NavLink ${page === "profile"?"active":""}`} onClick={()=>setPage("profile")} >Profile</li>
        <Dark className="NavBtn" toggleDarkMode={toggleDarkMode}/>
        </div>
    </div>
  )
}

export default Navbar