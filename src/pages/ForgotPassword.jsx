
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import '../css/entities/user/ForgotPassword.css'
import logoExample from '../assets/img/Example.png'

const ForgotPassword = () => {
    const { forgotPassword, successMsg } = useContext(AuthContext);
    const [form, setForm] = useState({
        email: '',
    });
    const { email } = form;

    const [forgotPasswordErrors, setForgotPasswordErrors] = useState({});

    const handleOnChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const emailValidation = input => {
        const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regEx.test(input.value) ? true : false;
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        forgotPassword(form);
    }

    const handleOnBlur = (e) => {
        if (e.target.value === "") {
            setForgotPasswordErrors({
            ...forgotPasswordErrors,
            [e.target.name]: "Campo obligatorio"
          });
        } else if (e.target.name === "email" && !emailValidation(e.target)) {
            setForgotPasswordErrors({
                ...forgotPasswordErrors,
                [e.target.name] : `Email no válido`
              });
        } else {
            setForgotPasswordErrors({
            ...forgotPasswordErrors,
            [e.target.name]: ``,
          });
    
        }
    
      };

    return (
        <div className="wrapper">
            <form onSubmit={handleOnSubmit}>
                <div id="wizard">
	                <section>
	                    <div className="form-header">
	             	        <div className="avartar mb-2">
                                <img src={logoExample} alt="logo"/>
							</div>
	                    </div>
						<div className="form-group">
                                <h2 className='text-center'>¿Olvido su contraseña?</h2>
							<div className="forgot-form-holder">
                              <label>Ingrese su email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="email@email.com"
                                    onChange={handleOnChange}
                                    onBlur={handleOnBlur}
                                    className="form-control mt-2"
                                />
                                <p>{forgotPasswordErrors.email}</p>
							</div>
	                    </div>

                        <div className='d-flex justify-content-between align-items-center'>
                                <Link to='/' className='forgot-link'> Volver a inicio </Link>
                                <button
                                disabled={Object.values(form).some((value) => value === "")} 
                                type="submit" 
                                className='form-submit-button'
                            >Enviar</button>
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
