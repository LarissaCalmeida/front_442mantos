import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.css';

function Footer(){
    return(
        <footer className={styles.containerFooter}>
            <div className={styles.info}>
            <Container>
                <Row>
                    <Col>
                        <img src="/images/logo-lg.png" alt="Logo" />
                    </Col>
                    <Col className={styles.fale_conosco}>
                        <strong >Fale conosco:</strong>
                        <ul>
                            <li>(00) 00000-0000</li>
                            <li>email@hotmail.com</li>
                            <li>Itabuna-Ba</li>
                        </ul>
                    </Col>
                    <Col className={styles.social_media}>
                        <strong>Redes sociais: </strong>
                        <ul>
                            <li>
                                <a href="#" target="_blank"><img src="/images/instagram.png" alt="instagram" /></a>
                            </li>
                            <li>
                                <a href="#" target="_blank"><img src="/images/facebook.png" alt="facebook" /></a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className={styles.developer}>
                        <strong>Desenvolvido por: <span>lari.code</span></strong>
                    </Col>
                </Row>
            </Container>
            </div>
            <div className={styles.copyright}>
                <span>© 2022. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;