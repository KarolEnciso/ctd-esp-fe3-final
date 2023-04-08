import { createContext, useContext, useState, useEffect, useReducer } from "react";


// export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

const themes = {
  dark: {
    theme: true,
    backgroundColor: "black",
    color: "white"
  },
  light: {
    theme: false,
    backgroundColor: "white",
    color: "black"
  }
}

const initialThemeState = themes.light

const themeReducer = (state, action) => {
  switch(action.type){
    case 'CHANGE_DARK':
      return themes.dark
    case 'CHANGE_LIGHT':
      return themes.light
    default:
      throw new Error();
  }
}

const initialFavState = []

const favReducer = (state, action) => {
  switch(action.type){
    case "ADD_FAV":
      return [...state, action.payload]
    default:
       throw new Error();
  }
}


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [dentists, setDentistList] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState);
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)
  console.log(favState);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favState))
  }, [favState])
  
 
  useEffect(() => {
    const fetchDentist = async () => {
      let res = await fetch (URL)
      let data = await res.json()
      setDentistList(data)
    }
    fetchDentist()
  },[])

  return (
    <ContextGlobal.Provider value={{dentists, setDentistList, themeState, themeDispatch, favState, favDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useContextGlobal = () => useContext(ContextGlobal);