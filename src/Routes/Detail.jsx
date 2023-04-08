import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dentist, setDentist] = useState({})
  const {id} = useParams();
  const url = 'https://jsonplaceholder.typicode.com/users/' + id;

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDentist(data))
  }, [url])


  return (
    <>
      <h1>Detail Dentist {dentist.id} </h1>
      <img src='/images/doctor.jpg' alt='dentistImage'/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail