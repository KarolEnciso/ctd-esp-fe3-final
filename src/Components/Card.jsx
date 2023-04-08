import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const {favDispatch} = useContextGlobal();
  const {dentists} = useContextGlobal();

  const addFav = () => {
    console.log(dentists);
    favDispatch({type: "ADD_FAV", payload: dentists})
  };

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={"/details/" + id}>
          <img src="./images/doctor.jpg" alt="dentistImage"/>
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
