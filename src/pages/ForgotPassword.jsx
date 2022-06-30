import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

const ForgotPassword = () => {
    const { forgotPassword, successMsg } = useContext(AuthContext);
    const [form, setForm] = useState({
        email: '',
    });
    const { email } = form;

    const handleOnChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleOnSubmit = e => {
        e.preventDefault();
        forgotPassword(form);
    }

    return (
        <>
            <h1> Forgot PASSWORD</h1>
            <Link to="/"> Volver al Home</Link>
            <form onSubmit={handleOnSubmit}>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                    />
                </div>

                <button>Enviar</button>
            </form>
            {
                successMsg && <p> {successMsg} </p>
            }
        </>
    );
}

export default ForgotPassword;