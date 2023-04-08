import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    name: "",
    email: ""
  })

  const [err,setErr] = useState(false)
  const [show, setShow] = useState(false)

  const regrex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleSubmit = (event) => {
    event.preventDefault();
    if(user.name.length > 5 && regrex.test(user.email)){
      setShow(true)
      setErr(false)
    } else {
      setShow(false)
      setErr(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre: " value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
        <input type="text" placeholder="Ingrese su email: " value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
        <button>Send</button>
      </form>
      {err ? <p>Please Verify the info</p> : null}
      {show && <p>Thanks {user.name}, we`ll contact you by email as soon as posible</p>}
    </div>
  );
};

export default Form;
