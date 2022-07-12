import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import '../css/entities/user/Login.css'

const Login = () => {
    const navigate = useNavigate();
    const { login, isAuth } = useContext(AuthContext);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const { email, password } = form;

    const [loginErrors, setLoginErrors] = useState({});

    const handleOnChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleOnSubmit = e => {
        e.preventDefault();
        login(form);
    }

    const handleOnBlur = (e) => {
        if (e.target.value === "") {
            setLoginErrors({
            ...loginErrors,
            [e.target.name]: "Campo obligatorio"
          });
        } else {
            setLoginErrors({
            ...loginErrors,
            [e.target.name]: ``,
          });
    
        }
    
      };

    useEffect(() => {
        if (isAuth) {
            navigate('/user-menu')
        }
    }, [isAuth])

    return (
        <>
            
            <div className='wrapper'>
                <form onSubmit={handleOnSubmit}>
                    <div id="wizard">
                    <h1 className='text-center login-title'>Login</h1>
                    <Link to='/' className='forgot-link'> Volver a inicio </Link>
                    <section>
                        <div className="form-header">
                            <div className="avartar mb-2 d-flex justify-content-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjpcIyJM88HMVZzl4QEIUmiv9Yh2n75PQwnw&usqp=CAU" alt="logo"/>
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
                                    onBlur={handleOnBlur}
                                />
                                    
                                    <p id='paragraph-styles'>{loginErrors.email}</p>
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
                                    onBlur={handleOnBlur}
                                />
                                    <p id='paragraph-styles'>{loginErrors.password}</p>
                            </div>
                                    
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to='/register' className='login-forgot-link'> ¿No tiene cuenta? </Link>
                            <button
                                disabled={Object.values(form).some((value) => value === "")} 
                                type="submit" 
                                className='login-submit-button'
                            >Iniciar sesion</button>
                        </div>
                    </section>
                    </div>
                </form>
        </div>
        </>
    );
};

export default Login;