import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const {favDispatch, dentists, favState} = useContextGlobal();

  const addFav = () => {
    let dentist = dentists.find(user => user.id === id)
    if(!favState.find(user => user.id === id)){
      favDispatch({type: "ADD_FAV", payload: dentist})
    } else {
      favDispatch({type: "DELETE_FAV", payload: dentist})
    }
  };

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={"/details/" + id}>
          <img src="./images/doctor.jpg" alt="dentistImage" width={200}/>
          <h3>{id}</h3>
          <h3>{name}</h3>
          <h3>{username}</h3>
        </Link>   

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add Favs 💛</button>
    </div>
  );
};

export default Card;
