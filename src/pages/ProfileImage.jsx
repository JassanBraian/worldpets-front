import React from 'react'
import { useState, useContext } from 'react'
import '../css/entities/user/UserMenu.css'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext' /* PARA TRAER AL USER EN LUGAR DE USAR INITIAL VALUES Y USESTATE DE USERINFO */


const ProfileImage = () => {

  const InitialValues = {
    _id: "1",
    role: "user",
    photo: "https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-user-icon-isolated-on-abstract-background-png-image_1824979.jpg"
  }

  const [userInfo, setUserInfo] = useState(InitialValues)


  const {user, updateUser} = useContext(AuthContext) /* PARA TRAER LOS DATOS DEL USER EN LUGAR DE USAR INITAIL VALUES Y USESTATE DE USERINFO*/
  const [form, setForm] = useState({
    photo: userInfo.photo || ''
  })
  
  const {photo} = userInfo


  const onChangeFile = e => {
    const photo = e.target.files[0];
    setForm({...form, photo})
  }

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append ('photo', photo);
    updateUser(form)
  }

  return (

    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div id="wizard">
	        <h1>Foto de usuario</h1>
	        <section>
	            <div className="form-header">
	             	<div className="avartar mb-5">
                        {
                            userInfo.photo && (
                            <img src={userInfo.photo} alt={userInfo.name}/>
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
                <div className='d-flex justify-content-between'>
                    <button type="submit" className='submit-button'>Enviar</button>
                    <Link to='/' className='forgot-link'> Volver a inicio </Link>
                </div>

	        </section>            			
        </div>
      </form>
    </div>
  )
}

export default ProfileImage
