import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

const ResetPassword = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const { resetPassword, isAuth } = useContext(AuthContext);
    const [form, setForm] = useState({
        password: '',
        passwordConfirm: ''
    })
    const { password, passwordConfirm } = form;

    const handleOnChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleOnSubmit = e => {
        e.preventDefault();
        resetPassword(token, form);
    }

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
                                <img src="https://www.creativefabrica.com/wp-content/uploads/2021/04/10/Pet-shop-animals-logo-template-Graphics-10636868-1-1-580x386.png" alt="logo"/>
							</div>
	                    </div>
						<div className="form-group">
                                <h2 className='text-center'>Configure su nueva contraseña</h2>
							<div className="form-holder">
                              <label>Ingrese su nueva contraseña</label>
                                <input 
                                    type="password"
                                    name='password'
                                    value={password}
                                    onChange={handleOnChange}
                                    placeholder="email@email.com"
                                    className="form-control mt-2"
                                />
                            </div>
                            <div className="form-holder">
                                <label>Confirme su nueva contraseña</label>
                                <input 
                                    type="password"
                                    name='passwordConfirm'
                                    value={passwordConfirm}
                                    onChange={handleOnChange}
                                    placeholder="email@email.com"
                                    className="form-control mt-2"
                                />
                            </div>
	                    </div>

                        <div className='d-flex justify-content-between align-items-center'>
                                <Link to='/' className='forgot-link'> Volver a inicio </Link>
                             <button type="submit" className='submit-button'>Enviar</button>
                        </div>
        	        </section>      				
                </div>
            </form>

		</div>
    );
};

export default ResetPassword;
