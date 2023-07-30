import React, { useState } from 'react';
import Logo from '../components/Logo';



export default function FormLogin() {

    const [input, setInput] = useState({
        emailInput: '',
        senhaInput: ''

    });

    const handleChange = ({target}) => {
        console.log(target.value);
        setInput({
            ...input,
            [target.name]: target.value
        });
    };

    return (
        <section
            id='form-container'
            className='flex-column sm-card secondary-center'>
            <Logo />
            <p>Entrar</p>
            <form className="flex-column secondary-center">
                <input
                    data-textid='form-email-login'
                    className='input-border-bottom bg-input-width'
                    name='emailInput'
                    onChange={handleChange}
                    placeholder='Email'
                    type='text'
                    value={input.emailInput}
                />
                <input
                    data-textid='form-password-login'
                    className='input-border-bottom bg-input-width'
                    name='senhaInput'
                    onChange={handleChange}
                    placeholder='Password'
                    type='password'
                    value={input.senhaInput}
                />
                <button data-textid='form-button-login' type='button' className='btn-accept'>Login</button>
            </form>
        </section>
    );
}
