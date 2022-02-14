import Head from 'next/head';
import React, { useState } from 'react'
import styles from './styles.module.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Container, Table } from 'react-bootstrap';
import Link from 'next/link';

function Shop(){
    const [ field, setField ] = useState({
        tamanho: "",
        quantidade: 1,
        
    })

    const somar = () => {
        //Colocar a quantidade máxima no estoque
        setField({
            ...field,
            quantidade: field.quantidade + 1
        });
    }

    const subtrair = () => {
        if(field.quantidade != 1) {
            setField({
                ...field,
                quantidade: field.quantidade - 1
            });;
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setField({
            ...field,
            [name]: value
        })
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>Suas Compras | 442 Mantos</title>
            </Head>
            <Navbar />

            <main>
                <Container>
                    <h1>Suas Compras</h1>

                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Produtos</th>                           
                                <th>Quantidade</th>
                                <th>Preço</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className={styles.containerProduct}>
                                        <img src="/images/camisa04.png" alt="Camisa 04" />

                                        <div className={styles.description}>
                                            <div>
                                                <strong>Camisa do Bahia Titular 21 - 22</strong>
                                                <span>Tamanho: P</span>
                                            </div>

                                            <button type="button">Remover</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <div className={styles.qtd}>
                                    <div className={styles.bgImage} onClick={() => subtrair()}>
                                        <img src="/images/menos.png" alt="Menos" />
                                    </div>
                                    <input 
                                        type="number" 
                                        name="quantidade" 
                                        id="quantidade" 
                                        value={field.quantidade}
                                        onChange={(e) => handleChange(e)} />
                                    <div className={styles.bgImage} onClick={()=> somar()}>
                                        <img src="/images/mais.png" alt="mais" />
                                    </div>
                                </div>
                                </td>
                                <td>
                                    R$XXX.XX
                                </td>
                                <td>
                                    R$XXX.XX
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <div className={styles.checkout}>
                        <div>
                            <strong>Subtotal: R$XXX.XX</strong>
                            <span>Taxa do frete será calculada ao finalizar a compra</span>
                        </div>

                        <Link href="/checkout"><a>Check-out</a></Link>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}

export default Shop;