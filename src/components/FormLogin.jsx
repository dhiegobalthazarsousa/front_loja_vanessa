import React from 'react';
import logoLoja from '../images/logo-loja.png';

export default function FormLogin() {
    return (
        <section
            id='form-container'
            className='flex column md-container jc-space-evenly ali-items-center card-form'>
            <div>
                <img src={logoLoja} alt="" />
            </div>
            <h1>PÁGINA DE LOGIN</h1>
            <input
                data-textid='form-email-login'
                type='text'
                className='input-border-bottom md-input-width'
                placeholder='Email'
            />
            <input
                data-textid='form-password-login'
                type='password'
                className='input-border-bottom md-input-width'
                placeholder='Password'
            />
            <button data-textid='form-button-login' type='button' className='btn-accept'>Login</button>
        </section>
    );
}
