import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './styles.module.css';

function Login(){
    return(
        <div className={styles.container}>
            <Head>
                <title>Login | 442 Mantos</title>
            </Head>
            <Container>
                <div className={styles.bgImage}>
                    <img src="/images/bg-adm.png" alt="bg-adm" />
                </div>

                <div>
                    <img src="/images/logo-branca-lg.png" alt="Logo" />

                    <form method="post">
                        <div>
                            <h2>Bem-vindo</h2>
                            <span>Login administrativo</span>
                        </div>

                        <input type="email" id="email" name="email" placeholder="E-mail" />
                        <input type="password" id="password" name="password" placeholder="Senha" />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </Container>
        </div>
    );
}

export default Login;