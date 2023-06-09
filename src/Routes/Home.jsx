import React from 'react'
import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context'
import "./home.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentists} = useContextGlobal()
  console.log(dentists);
  return (
    <main className="home" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => <Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username}/>)}
      </div>
    </main>
  )
}

export default Home