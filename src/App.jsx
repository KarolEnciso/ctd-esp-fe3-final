
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useContextGlobal } from "./Components/utils/global.context";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";


function App() {

  const {themeState} = useContextGlobal()

  return (
      <div className="App" styles={{backgroundColor: themeState.backgroundColor, color: themeState.color}}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/details/:id" element={<Detail/>}/>
          {/* <Route path='*' element={<NotFound/>} />  */}
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
