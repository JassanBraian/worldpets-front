import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import '../css/entities/user/ResetPassword.css'
import logoExample from '../assets/img/Example.png'

const ResetPassword = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const { resetPassword, isAuth } = useContext(AuthContext);
    const [form, setForm] = useState({
        password: '',
        passwordConfirm: ''
    })
    const { password, passwordConfirm } = form;
    const [resetPasswordErrors, setResetPasswordErrors] = useState({});

    const handleOnChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleOnSubmit = e => {
        e.preventDefault();
        if(password !== passwordConfirm) {
            setResetPasswordErrors({
              ...resetPasswordErrors,
              "password": 'Contraseñas no coinciden',
              "passwordConfirm" : 'Contraseñas no coinciden'
            });
            return;
          }
        resetPassword(token, form);
    }

    const handleOnBlur = (e) =>{
        if(e.target.value === "") {
            setResetPasswordErrors({
            ...resetPasswordErrors,
            [e.target.name] : "Campo obligatorio"
          });
        } else { 
            setResetPasswordErrors({
            ...resetPasswordErrors,
            [e.target.name] : "",
          });
        } 
      };

    useEffect(() => {
        isAuth && navigate('/user-menu');
    }, [isAuth]);

    return (
        <div className="wrapper">
            <form onSubmit={handleOnSubmit}>
                <div id="wizard">
	                <section>
	                    <div className="form-header">
	             	        <div className="avartar mb-2">
                                <img src={logoExample} alt="logo"/>
							</div>
	                    </div>
						<div className="form-group">
                                <h2 className='text-center'>Configure su nueva contraseña</h2>
							<div className="reset-form-holder">
                              <label>Ingrese su nueva contraseña</label>
                                <input 
                                    type="password"
                                    name='password'
                                    value={password}
                                    onChange={handleOnChange}
                                    onBlur={handleOnBlur}
                                    minLength='8'
                                    placeholder="Nueva contraseña"
                                    className="form-control mt-2"
                                />
                                <p>{resetPasswordErrors.password}</p>
                            </div>
                            <div className="reset-form-holder">
                                <label>Confirme su nueva contraseña</label>
                                <input 
                                    type="password"
                                    name='passwordConfirm'
                                    value={passwordConfirm}
                                    onChange={handleOnChange}
                                    onBlur={handleOnBlur}
                                    minLength='8'
                                    placeholder="Repita su nueva contraseña"
                                    className="form-control mt-2"
                                />
                                <p>{resetPasswordErrors.passwordConfirm}</p>
                            </div>
	                    </div>

                        <div className='d-flex justify-content-between align-items-center'>
                                <Link to='/' className='forgot-link'> Volver a inicio </Link>
                                <button
                                    disabled={Object.values(form).some((value) => value === "")} 
                                    type="submit" 
                                    className='form-submit-button'
                                >Enviar</button>
                        </div>
        	        </section>      				
                </div>
            </form>

		</div>
    );
};

export default ResetPassword;
