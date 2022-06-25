import {useState, useContext , React} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/user/AuthContext'


const ForgotPassword = () => {

    const {forgotPass, successMsg} = useContext(AuthContext);
    const [form, setForm] = useState({
        email: '',
        passsword: ''
    });

    const {email} = form;
    const handleOnChange = e => setForm({...form, [e.target.name]: e.target.value});

    const handleOnSubmit = e => {
        e.preventDefault();
        forgotPass(form);
    }

  return (
    <div>
        <h1>Enviar contraseña al email</h1>
        <Link to='/'>Volver al Home</Link>
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
            <button type="submit">Enviar email</button>
        </form>
        <Link to='/reset-password' className='mt-4'> ¿Quiere cambiar su contraseña? </Link>
        {
            successMsg && <p>{successMsg}</p>
        }
    </div>
  )
}

export default ForgotPassword