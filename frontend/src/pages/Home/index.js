import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import InputBlock from '../../components/InputBlock';

import './styles.css';
import api from '../../services/api';

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        await api.post('/login', { email, password })
            .then((res) => {
                sessionStorage.setItem('session_status', 1);
                localStorage.setItem('user_name', res.data.name);
                localStorage.setItem('user_email', res.data.email);
                history.push('/tweets');
            }).catch((err) => {
                alert(err);
            });
    }

    async function handleRegister(e) {
        e.preventDefault();

        if (passwordRegister !== confirmPassword) {
            return alert('Senhas não conferem!');
        } else {
            await api.post('/register', {
                name,
                email: emailRegister,
                password: passwordRegister
            }).then((res) => {
                alert('Cadastrado com sucesso!');
            }).catch((err) => {
                alert(err);
            });
        }
    }

    return (
        <div id="home">
            <div className="left-side" />  {/* Div que faz o background do lado esquerdo da página */}

            <div className="right-side">

                <form onSubmit={handleLogin} className="login-form">
                    <h2>Entrar no Clone-Twitter</h2>

                    <InputBlock
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <InputBlock
                        type="Password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button type="submit" text="Entrar" />

                </form>

                <hr />

                <form onSubmit={handleRegister} className="register-form">
                    <h2>Cadastrar-se no Clone-Twitter</h2>

                    <InputBlock
                        type="text"
                        placeholder="Nome Completo"

                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <InputBlock
                        type="email"
                        placeholder="E-mail"
                        value={emailRegister}
                        onChange={e => setEmailRegister(e.target.value)}
                    />

                    <InputBlock
                        type="password"
                        placeholder="Senha"
                        value={passwordRegister}
                        onChange={e => setPasswordRegister(e.target.value)}
                    />

                    <InputBlock
                        type="password"
                        placeholder="Confirmar senha"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />

                    <Button type="submit" text="Cadastrar" />

                </form>
            </div>
        </div>
    );
}