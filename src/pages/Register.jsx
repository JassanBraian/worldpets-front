import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import '../css/entities/user/Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-regular-svg-icons';

const Register = () => {
    const navigate = useNavigate();
    const { registerUser, isAuth } = useContext(AuthContext);
    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const { name, surname, email, password, confirmPassword } = form;

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
            <div className='title'>Registrate</div>

        <div className='wrapper'>
            <form onSubmit={handleOnSubmit}>
            <div id="wizard">
            <Link to='/' className='forgot-link'> Volver a inicio </Link>
                    <section>
                        <div className="form-header">
                            <div className="avartar mb-2 d-flex justify-content-center">
                            <FontAwesomeIcon icon={faPenToSquare} size='8x'/>
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
                                    placeholder="Ingrese su nombre"
                                    className="form-control mt-2"
                                />
                            </div>
                            <div className='form-holder'>
                                <label>Apellido</label>
                                <input
                                    type="text"
                                    name="surname"
                                    value={surname}
                                    onChange={handleOnChange}
                                    placeholder="Ingrese su nombre apellido"
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