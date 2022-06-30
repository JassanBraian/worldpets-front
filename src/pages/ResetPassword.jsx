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
    const { password, confirmPassword } = form;

    const handleOnChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleOnSubmit = e => {
        e.preventDefault();
        resetPassword(token, form);
    }

    useEffect(() => {
        isAuth && navigate('/private');
    }, [isAuth]);

    return (
        <>
            <h1>Reset Password  </h1>
            <Link to="/"> Volver al Home</Link>
            <Link to='/forgotPassword'>   Olvido su Contraseña...</Link>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Change Password</label>
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
                <button>Change Password</button>
            </form>
        </>
    );
};

export default ResetPassword;