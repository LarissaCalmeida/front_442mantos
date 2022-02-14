import Head from 'next/head';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './styles.module.css';

type PageErrorProps = {
    title: string;
    description: string;
    image: string;
}


function PageError( props: PageErrorProps ){
    return(
        <div className={styles.container}>
            <Head>
                <title>{props.title} | 442 Mantos</title>
            </Head>

            <Navbar />

            <main>
                <Container>
                    <Row className={styles.containerError}>
                        <Col>
                            <img src={props.image} alt={props.title} />
                        </Col>
                        <Col>
                            <div>
                                <h1>{props.title}</h1>
                                <p>{props.description}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </div>
    );
}

export default PageError;