import React from 'react';
import Button from '../../components/Button';

import InputBlock from '../../components/InputBlock';

import './styles.css';

export default function Home() {
    return (
        <div id="home">
            <div className="left-side" />  {/* Div que faz o background do lado esquerdo da página */}

            <div className="right-side">

                <form onSubmit={() => { }} className="login-form">
                    <h2>Entrar no Clone-Twitter</h2>

                    <InputBlock type="email" placeholder="E-mail" />
                    <InputBlock type="Password" placeholder="Senha" />

                    <Button type="submit" text="Entrar" />

                </form>

                <hr />
                
                <form onSubmit={() => { }} className="register-form">
                    <h2>Cadastrar-se no Clone-Twitter</h2>

                    <InputBlock type="text" placeholder="Nome Completo" />
                    <InputBlock type="email" placeholder="E-mail" />
                    <InputBlock type="password" placeholder="Senha" />
                    <InputBlock type="password" placeholder="Confirmar senha" />

                    <Button type="submit" text="Cadastrar" />

                </form>
            </div>
        </div>
    );
}