import {useState, useContext, useEffect, React} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/user/AuthContext';


const ResetPassword = () => {
    const navigate = useNavigate();
    const {token} = useParams();
    const {resetPass, isAuth} = useContext(AuthContext);
    const [form, setForm] = useState({
        password: '',
        passwordConfirm: ''
    })
    const {password, passwordConfirm} = form;
    const handleOnChange = e => setForm({...form, [e.target.name]: e.target.value});

    const handleOnSubmit = e => {
        e.preventDefault();
        resetPass(token, form);
    }

    useEffect(() => {
        if (isAuth) {
            navigate('/private');
        }
    }, [isAuth])

  return (
    <div>
        <h1>Reiniciar Contraseña</h1>
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>Ingrese Contraseña Nueva</label>
                    <input
                        type="password"
                        name='password'
                        value={password}
                        onChange={handleOnChange}
                    />
            </div>
            <div>
                <label>Confirmar Contraseña Nueva</label>
                    <input
                        type="password"
                        name='passwordConfirm'
                        value={passwordConfirm}
                        onChange={handleOnChange}
                    />
            </div>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default ResetPassword