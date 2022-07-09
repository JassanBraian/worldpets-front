
import React from 'react'
import { useState, useContext, useEffect } from 'react'
import '../css/entities/user/UserMenu.css'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext' /* PARA TRAER AL USER EN LUGAR DE USAR INITIAL VALUES Y USESTATE DE user */


const UserMenu = () => {

  // const InitialValues = {
  //   _id: "1",
  //   role: "user",
  //   email: "joni.arriazu2@gmail.com",
  //   name: "Jonathan",
  //   surname: "Arriazu",
  //   ubication: "Tucumán, Argentina",
  //   postalCode: "4107",
  //   photo: "https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-user-icon-isolated-on-abstract-background-png-image_1824979.jpg",
  //   password: "asd123"
  // }

  /* const [user, setuser] = useState(InitialValues) */


  const {user, updateUser, getUser} = useContext(AuthContext) /* PARA TRAER LOS DATOS DEL USER EN LUGAR DE USAR INITAIL VALUES Y USESTATE DE user --¿Seria user o getuser? ---*/
  
  const InitialValues = {
    email: '',
    name: '',
    surname: ''
  }
  
  const [form, setForm] = useState(InitialValues)
  
  const {name, surname, email} = form

  useEffect(() => {
    getUser()
  }, [])
  

  useEffect(() => {
    Object.keys(user).length > 0
            && setForm(user);
  }, [user])
  

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    /* const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('email', email); */
    console.log(form);
    updateUser(form)
  }

  return (

    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div id="wizard">
	        <h1>Datos de usuario</h1>
	          <section>
						  <div className="form-group">
							  <div className="form-holder">
                  <label>Nombre:</label>
								  <input
                    type="text"
                    onChange={handleChange}
                    value={name}
                    name='name'  
                    className="form-control"
								  />
							  </div>
							  <div className="form-holder">
                  <label>Apellido:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={surname}
                    name='surname' 
                    className="form-control"
                  />
							  </div>
						
	              <div className="form-holder">
                  <label>Email:</label>
                  <input 
                    type="email"
                    onChange={handleChange}
                    value={email}
                    name='email' 
                    className="form-control"
                  />
							  </div>
						  </div>

              <div className='d-flex justify-content-end'>

                <button type="submit" className='submit-button'>Enviar</button>



              </div>

	          </section>
	                
					
        </div>
      </form>
		</div>
  )
}

export default UserMenu