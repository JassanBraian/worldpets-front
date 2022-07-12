import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import '../css/entities/user/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-regular-svg-icons';

const Login = () => {
    const navigate = useNavigate();
    const { login, isAuth } = useContext(AuthContext);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const { email, password } = form;

    const handleOnChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleOnSubmit = e => {
        e.preventDefault();
        login(form);
    }

    useEffect(() => {
        isAuth && navigate('/private');
    }, [isAuth]);

    return (
        <>
            <div className='title'>Login</div>
            <div className='wrapper'>
                <form onSubmit={handleOnSubmit}>
                    <div id="wizard">
                    <Link to='/' className='forgot-link'> Volver a inicio </Link>
                    <section>
                        <div className="form-header">
                            <div className="avartar mb-2 d-flex justify-content-center">
                            <FontAwesomeIcon icon={faUser} size='8x'/>
                                {/* <img src={registerImg} alt="logo" /> */}
                            </div>
                        </div>
                        <div className="form-group">
                            <h2 className='text-center'>Ingrese sus datos</h2>
                                    
                            <div className='form-holder'>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    placeholder="email@email.com"
                                    className="form-control mt-2"
                                />
                            </div>
                            <div className='form-holder'>
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    placeholder="Ingrese una contraseña segura"
                                    className="form-control mt-2"
                                />
                            </div>
                                    
                        </div>
                        <div className='d-flex justify-content-between'>
                            <button type="submit" className='submit-button'>Iniciar sesion</button>
                            <Link to='/register' className='forgot-link'> ¿No tiene cuenta? </Link>
                        </div>
                    </section>
                    </div>
                </form>
        </div>
        </>
    );
};

export default Login;