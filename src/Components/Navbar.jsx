import React from 'react'
import { Link } from 'react-router-dom'
import {useContextGlobal} from "./utils/global.context"
import "./navbar.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, themeDispatch} = useContextGlobal()

  const changeTheme = () => {
    if(themeState.theme){
      themeDispatch({type: "SWITCH_DARK"})
    } else{
      themeDispatch({type: "SWITCH_LIGHT"})
    } 
  }

  return (
    <nav className='navbar'>
      <div className='nabImg'>
        <img src="../DH.ico" alt="DhImage"/>
        <h3>Dentist</h3>
      </div>

      <div className='navLinks'>
      <Link to="/"><h3>Home</h3></Link>
      <Link to="/favs"><h3>Favorites</h3></Link>
      <Link to="/contact"><h3>Contact</h3></Link>
      <button className='navButton' onClick={changeTheme}>{themeState.theme!= "dark" ? "🌙" : "🌞"}</button>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
    </nav>
  )
}

export default Navbar