
import React from 'react'
import { useState, useContext } from 'react'
import '../css/entities/user/UserMenu.css'
import { Link } from 'react-router-dom';
import AuthContext from '../context/user/AuthContext' /* PARA TRAER AL USER EN LUGAR DE USAR INITIAL VALUES Y USESTATE DE USERINFO */

const UserMenu = () => {

  const InitialValues = {
    _id: "1",
    role: "user",
    email: "joni.arriazu2@gmail.com",
    firstName: "Jonathan",
    lastName: "Arriazu",
    ubication: "Yerba Buena, Tucumán, Argentina",
    postalCode: "4107",
    photo: "https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-user-icon-isolated-on-abstract-background-png-image_1824979.jpg",
    password: "asd123"
  }

  const [userInfo, setUserInfo] = useState(InitialValues)


  const {user, updateUser} = useContext(AuthContext) /* PARA TRAER LOS DATOS DEL USER EN LUGAR DE USAR INITAIL VALUES Y USESTATE DE USERINFO*/
  const [form, setForm] = useState({
    email: userInfo.email || '',
    firstName: userInfo.firstName || '',
    lastName: userInfo.lastName || '',
    phone: userInfo.phone || '',
    photo: userInfo.photo || ''
  })
  
  const {firstName, lastName, ubication, postalCode, email, photo} = userInfo


  const onChangeFile = e => {
    const photo = e.target.files[0];
    setForm({...form, photo})
  }

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Enviando data');
    const formData = new FormData();
    formData.append ('photo', photo);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('ubication', ubication);
    updateUser(form)
  }

  return (

    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div id="wizard">
	        <h1>Perfil</h1>
	          <section>
	            <div className="form-header">
	             	<div className="avartar mb-5">
                  {
                    userInfo.photo && (
                      <img src={userInfo.photo} alt={userInfo.firstName}/>
                        /*               <img src={`${process.env.REACT_APP_USER_IMAGES}/${user.photo}}`} classNameName="  profilePic" /> */ /* Esto es para que me traiga la foto desde el backend y no desde el front */
                    )
                    }
								  <div className="avartar-picker d-flex justify-content-center">
									  <input 
                      type="file"
                      accept='image/*'
                      onChange={onChangeFile}
                      className="inputfile" 
                      name="file-1[]" 
									  	id="file-1" 
                      data-multiple-caption="{count} files selected" 
									  />
									  <label htmlFor="file-1">
                      <i className="zmdi zmdi-camera"></i>
                      <span>Choose Picture</span>
									  </label>
								  </div>
							  </div>
	            </div>
						  <div className="form-group">
							  <div className="form-holder">
								  <input
                    type="text"
                    onChange={handleChange}
                    value={firstName}
                    name='firstName'  
                    className="form-control"
								  />
							  </div>
							  <div className="form-holder">
                  <input
                    type="text"
                    onChange={handleChange}
                    value={lastName}
                    name='lastName' 
                    className="form-control"
                  />
							  </div>
						
	              <div className="form-holder">
                  <input 
                    type="email"
                    onChange={handleChange}
                    value={email}
                    name='email' 
                    className="form-control"
                  />
							  </div>
							  <div className="form-holder">
                  <input 
                    type="text"
                    onChange={handleChange}
                    value={ubication}
                    name='ubication'  
                    className="form-control"
                  />
							  </div>
						  </div>

              <div className='d-flex justify-content-between'>

                <button type="submit" className='submit-button'>Enviar</button>

                <Link to='/forgot-password' className='forgot-link'> ¿Ha olvidado su contraseña? </Link>

              </div>

	          </section>
	                
					
        </div>
      </form>
		</div>
  )
}

export default UserMenu