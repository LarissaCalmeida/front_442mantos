import { style } from '@mui/system';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CardCatalog from '../../components/CardCatalog';
import styles from './styles.module.css';

function Catalog(){
    return(
        <div className={styles.container}>
            <Head>
                <title>Catálogo | 442 Mantos</title>
            </Head>
            <Row>
            <Col sm="2">
            <div className={styles.sidebar}>
                <Link href="/"><a><img src="/images/logo.png" alt="Logo"/></a></Link>
                
                <div>
                    <strong>Categoria</strong>

                    <ul>
                        <li>Todos</li>
                        <li>Basquete</li>
                        <li>Corta Vento</li>
                        <li>Novidades</li>
                        <li>Seleções</li>
                        <li>Times Internacionais</li>
                    </ul>
                </div>
            </div>
            </Col>

            <Col sm="10">
            <main>
                <nav>
                    <div className={styles.title}>
                        <h1>Catálogo</h1>
                        <strong>Todos</strong>
                    </div>

                    <Link href="/shop">
                        <a><img src="/images/sacolas-de-compras.png" alt="Sacola de compras" /></a>
                    </Link>
                </nav>
                <section className={styles.catalog}>
                    <CardCatalog 
                        name="Camisa do PSG"
                        price="XXX.XX"
                        image="/images/camisa-psg.png"
                    />
                    <CardCatalog 
                        name="Camisa do Bahia"
                        price="XXX.XX"
                        image="/images/camisa-bahia.png"
                    />
                    <CardCatalog 
                        name="Camisa do PSG"
                        price="XXX.XX"
                        image="/images/camisa-psg.png"
                    />
                    <CardCatalog 
                        name="Camisa do Bahia"
                        price="XXX.XX"
                        image="/images/camisa-bahia.png"
                    />
                    <CardCatalog 
                        name="Camisa do PSG"
                        price="XXX.XX"
                        image="/images/camisa-psg.png"
                    />
                    <CardCatalog 
                        name="Camisa do Bahia"
                        price="XXX.XX"
                        image="/images/camisa-bahia.png"
                    />
                    <CardCatalog 
                        name="Camisa do PSG"
                        price="XXX.XX"
                        image="/images/camisa-psg.png"
                    />
                    <CardCatalog 
                        name="Camisa do Bahia"
                        price="XXX.XX"
                        image="/images/camisa-bahia.png"
                    />
                </section>
            </main>
            </Col>
            </Row>
        </div>
    )
}

export default Catalog;