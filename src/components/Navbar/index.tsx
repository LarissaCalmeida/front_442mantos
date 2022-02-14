import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './styles.module.css'

function Navbar() {
    return(
        <nav className={styles.containerNav}>
            <Container>
            <Link href="/">
                <a><img src="/images/logo.png" alt="Logo" /></a>
            </Link>

            <ul className={styles.links}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/catalog">
                        <a>Camisas</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Sobre nós</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contato</a>
                    </Link>
                </li>
                <li>
                    <Link href="/faq">
                        <a>FAQ</a>
                    </Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/shop">
                        <a><img src="/images/sacolas-de-compras.png" alt="Comprar" /></a>
                    </Link>
                </li>
            </ul>
        </Container>
        </nav>
    )
}

export default Navbar;