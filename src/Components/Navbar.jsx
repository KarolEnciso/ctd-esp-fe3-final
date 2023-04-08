import React from 'react'
import { Link } from 'react-router-dom'
import {useContextGlobal} from "./utils/global.context"

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
    <nav>
      <div>
        <img src="../DH.ico" alt="DhImage"/>
        <h3>Dentist</h3>
      </div>

      <div>
      <Link to="/"><h3>Home</h3></Link>
      <Link to="/favs"><h3>Favorites</h3></Link>
      <Link to="/contact"><h3>Contact</h3></Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>{themeState.theme ? "🌙" : "🌞"}</button>
    </nav>
  )
}

export default Navbar