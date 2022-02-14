import Head from 'next/head';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './styles.module.css'

function Checkout(){
    const [ field, setField ] = useState({
        pagamento: "boleto",
    })

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
                <title>Checkout | 442 Mantos</title>
            </Head>

            <Navbar />

            <main>
                <Container className={styles.containerCheckout}>
                    <form method="post">
                        <strong>Carrinhos &gt; <span>Checkout</span></strong>

                        <div className={styles.fieldInput}>
                            <h2>Contato</h2>
                            <input 
                                type="text" 
                                id="nome" 
                                name="nome" 
                                placeholder="Nome completo " 
                            />
                            <input 
                                type="text" 
                                id="whatsapp" 
                                name="whatsapp" 
                                placeholder="Número do Whatsapp " 
                            />
                        </div>

                        <div className={styles.fieldInput}>
                            <h2>Endereço</h2>
                            <input 
                                type="text" 
                                id="cep" 
                                name="cep" 
                                placeholder="CEP" 
                            />

                            <div className={styles.smInput}>
                                <input 
                                    type="text" 
                                    id="rua" 
                                    name="rua" 
                                    placeholder="Rua" 
                                />
                                <input 
                                    type="number" 
                                    id="numero" 
                                    name="numero" 
                                    placeholder="Número" 
                                />
                            </div>

                            <input 
                                type="text" 
                                id="bairro" 
                                name="bairro" 
                                placeholder="Bairro" 
                            />

                            <div className={styles.smInput}>
                                <select>
                                    <option>Estado</option>
                                </select>
                                <select>
                                    <option>Cidade</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.fieldInput}>
                            <h2>Pagamento</h2>
                            <div className={styles.inputRadio}>
                                <label>
                                    <input 
                                        type="radio" 
                                        id="pagamento" 
                                        name="pagamento" 
                                        value="boleto" 
                                        checked={field.pagamento === "boleto"}
                                        onChange={(e) => {handleChange(e)}}
                                    />
                                    <span>Boleto</span>
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        id="pagamento" 
                                        name="pagamento" 
                                        value="cartao"
                                        checked={field.pagamento === "cartao"} 
                                        onChange={(e) => {handleChange(e)}}
                                    />
                                    <span>Cartão</span>
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        id="pagamento" 
                                        name="pagamento" 
                                        value="pix"
                                        checked={field.pagamento === "pix"}
                                        onChange={(e) => {handleChange(e)}}
                                    />
                                    <span>Pix</span>
                                </label>
                            </div>

                            {
                                field.pagamento === "cartao" &&
                                <div className={styles.dividir}>
                                    <span>Dividir em: </span>
                                    <select>
                                        <option>1x de R$XXX.XX</option>
                                    </select>
                                </div>
                            }
                            
                        </div>
                        <button type="button">Finalizar pedido</button>
                </form>
                </Container>
            </main>

            <Footer />
        </div>
    );
}

export default Checkout;