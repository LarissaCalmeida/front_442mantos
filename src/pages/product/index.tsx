import Head from 'next/head';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './styles.module.css';

function Product(){
    return(
        <div>
            <Head>
                <title>Detalhes | 442 Mantos</title>
            </Head>

            <Navbar />
            <main>
                <Container>
                <section>
                    <Row>
                        <Col>
                            <div>
                                <div className={styles.images}>
                                    <div className={styles.imagesSm}>
                                        <img src="/images/camisa01.png" />
                                        <img src="/images/camisa02.png" />
                                        <img src="/images/camisa03.png" />
                                    </div>
                                    
                                    <img src="/images/camisa04.png" />
                                </div>
                                <div className={styles.details}>
                                    <h1>Camisa do Bahia Titular 21-22</h1>
                                    <strong>R$XXX.XX</strong>

                                    <div>
                                        <span>Tamanho</span>
                                        <div>
                                            <input type="radio" name="tamanho" id="tamanhoP" value="P"/>
                                            <label htmlFor="tamanhoP">P</label>

                                            <input type="radio" name="tamanho" id="tamanhoM" value="M"/>
                                            <label htmlFor="tamanhoM">M</label>

                                            <input type="radio" name="tamanho" id="tamanhoG" value="G"/>
                                            <label htmlFor="tamanhoG">G</label>

                                            <input type="radio" name="tamanho" id="tamanhoGG" value="GG"/>
                                            <label htmlFor="tamanhoGG">GG</label>

                                            <input type="radio" name="tamanho" id="tamanhoXG" value="XG"/>
                                            <label htmlFor="tamanhoXG">XG</label>
                                        </div>
                                    </div>
                                    <div className={styles.qtd}>
                                        <span>Quantidade</span>

                                        <div>
                                            <img src="/images/menos.png" alt="Menos" />
                                            <input type="number" name="quantidade" id="quantidade" value="1" />
                                            <img src="/images/mais.png" alt="mais" />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default Product;