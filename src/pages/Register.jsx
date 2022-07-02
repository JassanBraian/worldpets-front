import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

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
            <Link to="/"> Volver al Home</Link>
            <Link to='/forgotPassword'>   Olvido su Contraseña...</Link>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="passwordConfirm"
                        value={confirmPassword}
                        onChange={handleOnChange}
                    />
                </div>
                <button>Registrar</button>
            </form>
        </>
    );
};

export default Register;