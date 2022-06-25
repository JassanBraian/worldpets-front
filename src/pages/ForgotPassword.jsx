import {useState, useContext} from 'react'
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
        <h1>Reestablecer Contraseña</h1>
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
        {
            successMsg && <p>{successMsg}</p>   /* Aqui hacer que se muestre loading de carga */
        }
    </div>
  )
}

export default ForgotPassword