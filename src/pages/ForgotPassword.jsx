
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import '../css/entities/user/ForgotPassword.css'

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
        <div className="wrapper">
            <form onSubmit={handleOnSubmit}>
                <div id="wizard">
	                <section>
	                    <div className="form-header">
	             	        <div className="avartar mb-2">
                                <img src="https://www.creativefabrica.com/wp-content/uploads/2021/04/10/Pet-shop-animals-logo-template-Graphics-10636868-1-1-580x386.png" alt="logo"/>
							</div>
	                    </div>
						<div className="form-group">
                                <h2 className='text-center'>¿Olvido su contraseña?</h2>
							<div className="form-holder">
                              <label>Ingrese su email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="email@email.com"
                                    onChange={handleOnChange}
                                    className="form-control mt-2"
                                />
							</div>
	                    </div>

                        <div className='d-flex justify-content-between'>
                             <button type="submit" className='submit-button'>Enviar</button>
                                <Link to='/' className='forgot-link'> Volver a inicio </Link>
                        </div>
        	        </section>      				
                </div>
            </form>

      {
            successMsg && <p>{successMsg}</p> /* Aqui hacer que se muestre loading de carga */
      }
		</div>
    );
}

export default ForgotPassword;
