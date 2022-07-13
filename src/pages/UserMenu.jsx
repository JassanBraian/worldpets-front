
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
  const [userMenuErrors, setUserMenuErrors] = useState({});

  const InitialValues = {
    email: '',
    name: '',
    surname: ''
  }
  
  const [form, setForm] = useState(InitialValues)
  
  const {name, surname, email} = form

  const emailValidation = input => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEx.test(input.value) ? true : false;
  }

  useEffect(() => {
    getUser()
  }, [])
  

  useEffect(() => {
    Object.keys(user).length > 0
            && setForm(user);
  }, [user])
  

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleOnBlur = (e) =>{
    if(e.target.value === "") {
      setUserMenuErrors({
        ...userMenuErrors,
        [e.target.name] : "Campo obligatorio"
      });
    } else if (e.target.name === "email" && !emailValidation(e.target)) {
      setUserMenuErrors({
            ...userMenuErrors,
            [e.target.name] : `Email no válido`
          });
    }
    else { 
      setUserMenuErrors({
        ...userMenuErrors,
        [e.target.name] : "",
      });
    } 
  };

  const handleSubmit = e => {
    e.preventDefault();

    updateUser(form)
  }

  return (

    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div id="wizard">
        <Link to='/' className='forgot-link'> Ir a inicio </Link>
	        <h1 className='text-center'>Datos de usuario</h1>
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
                    onBlur={handleOnBlur}
								  />
                  <p>{userMenuErrors.name}</p>
							  </div>
							  <div className="form-holder">
                  <label>Apellido:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={surname}
                    name='surname' 
                    className="form-control"
                    onBlur={handleOnBlur}
                  />
                  <p>{userMenuErrors.surname}</p>
							  </div>
						
	              <div className="form-holder">
                  <label>Email:</label>
                  <input 
                    type="email"
                    onChange={handleChange}
                    value={email}
                    name='email' 
                    className="form-control"
                    onBlur={handleOnBlur}
                  />
                  <p>{userMenuErrors.email}</p>
							  </div>
						  </div>

              <div className='d-flex justify-content-between align-items-center'>
              <Link to='/profile-image' className='forgot-link'> Ir a foto de perfil </Link>
                <button type="submit" className='submit-button'>Enviar</button>



              </div>

	          </section>
	                
					
        </div>
      </form>
		</div>
  )
}

export default UserMenu