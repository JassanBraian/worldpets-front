import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import '../css/entities/user/Register.css'

const Register = () => {
    const navigate = useNavigate();
    const { registerUser, isAuth } = useContext(AuthContext);
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const { name, email, password, confirmPassword } = form;

    const handleOnChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleOnSubmit = e => {
        e.preventDefault();
        registerUser(form);
    }

    useEffect(() => {
        isAuth && navigate('/private');
    }, [isAuth])

    return (
        <>
            <h1>Register  </h1>

        <div className='wrapper'>
            <form onSubmit={handleOnSubmit}>
            <div id="wizard">
            <Link to='/' className='forgot-link'> Volver a inicio </Link>
                    <section>
                        <div className="form-header">
                            <div className="avartar mb-2 d-flex justify-content-center">
                                <img src="data:image/png;base64,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" alt="logo"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <h2 className='text-center'>Ingrese sus datos</h2>
                            <div className='form-holder'>
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleOnChange}
                                    placeholder="Ingrese su nombre completo"
                                    className="form-control mt-2"
                                />
                            </div>
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
                                <label>Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    placeholder="Ingrese una contraseña segura"
                                    className="form-control mt-2"
                                />
                            </div>
                            <div className='form-holder'>
                                <label>Confirme su contraseña</label>
                                <input
                                    type="password"
                                    name="passwordConfirm"
                                    value={confirmPassword}
                                    onChange={handleOnChange}
                                    placeholder="Repita la contraseña ingresada anteriormente"
                                    className="form-control mt-2"
                                />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                                <button type="submit" className='submit-button'>Enviar</button>
                                <Link to='/forgotPassword' className='forgot-link'> ¿Olvido su contraseña? </Link>
                        </div>
                    </section>
            </div>
            </form>
        </div>
        </>
    );
};

export default Register;