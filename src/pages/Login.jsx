import React from 'react';
import FormLogin from '../components/FormLogin';
import '../css/Login.css';
import '../css/global-style.css';

export default function Login() {
    return (
        <div className='full-content-container flex jc-center ali-items-center'>
            <FormLogin />
        </div>
    );
}
