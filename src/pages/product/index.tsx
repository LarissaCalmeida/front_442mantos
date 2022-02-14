import Head from 'next/head';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './styles.module.css';

function Product(){
    const [ field, setField ] = useState({
        tamanho: "",
        quantidade: 1,
        
    })

    const [ currentImage, setCurrentImage ] = useState("/images/camisa04.png")
    const [ imageProduct, setImageProduct ] = useState([
        "/images/camisa01.png",
        "/images/camisa02.png",
        "/images/camisa03.png",
    ])

    const nextProduct = (newCurrentImage: string, index: number) => {
        imageProduct.push(currentImage)
        imageProduct.splice(index, 1);
        setImageProduct(imageProduct);


        setCurrentImage(newCurrentImage);
    }

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
                <title>Detalhes | 442 Mantos</title>
            </Head>

            <Navbar />
            <main>
                <Container>
                <section>
                    <Row>
                        
                        <Col sm="5">
                                <div className={styles.images}>
                                    <div className={styles.imagesSm}>
                                        {
                                            imageProduct.map((value, index) => {
                                                return(
                                                    <img src={value} key={index} alt={value} onClick={() => nextProduct(value, index)}/>
                                                );
                                            })
                                        }
                                    </div>
                                    
                                    <img src={currentImage} />
                                </div>
                                <Row className={styles.frete}>
                                    <img src="/images/aviao.png" alt="Avião" />
                                    <p>Consulte o seu frete ao finalizar seu pedido <span>Frete grátis</span> para Itabuna - BA</p>
                                </Row>
                                <Row className={styles.details}>

                                    <h2>Detalhes:</h2>
                                    <p>Perfeita para os torcedores esta camisa é uma excelente escolha para representar o clube em todos os momentos.</p>
                                    <p>Confeccionada em produtos de excelente qualidade com tecnologia usadas pelos jogadores em campo e que combina maciez, leveza e ótimo caimento para maior naturalidade dos movimentos.</p>
                                </Row>

                                <Row className={styles.ficha}>
                                    <h2>Ficha Técnica: </h2>
                                    <ul>
                                        <li><span>Gênero: </span>Masculina / feminina / unissex</li>
                                        <li><span>Modelo: </span>Adulto torcedor</li>
                                        <li><span>Referência do modelo: </span>Torcedor</li>
                                        <li><span>Número: </span>Sem número</li>
                                        <li><span>Composição: </span>Poliéster/Elastano</li>
                                    </ul>
                                </Row>
                        </Col>
                        <Col sm="7">
                                <div className={styles.description}>
                                    <h1>Camisa do Bahia Titular 21-22</h1>
                                    <strong className={styles.price}>R$XXX.XX</strong>

                                    <div className={styles.tamanho}>
                                        <span>Tamanho</span>
                                        <div>
                                            <div>
                                                <input type="radio" name="tamanho" id="tamanhoP" value="P"/>
                                                <label htmlFor="tamanhoP">P</label>
                                            </div>

                                            <div>
                                                <input type="radio" name="tamanho" id="tamanhoM" value="M"/>
                                                <label htmlFor="tamanhoM">M</label>
                                            </div>

                                            <div>
                                                <input type="radio" name="tamanho" id="tamanhoG" value="G"/>
                                                <label htmlFor="tamanhoG">G</label>
                                            </div>

                                            <div>
                                                <input type="radio" name="tamanho" id="tamanhoGG" value="GG"/>
                                                <label htmlFor="tamanhoGG">GG</label>
                                            </div>

                                            <div>
                                                <input type="radio" name="tamanho" id="tamanhoXG" value="XG"/>
                                                <label htmlFor="tamanhoXG">XG</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.qtd}>
                                        <span>Quantidade</span>

                                        <div>
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
                                    </div>

                                    <div className={styles.person}>

                                        <input type="checkbox" name="person" id="person" value="person" />
                                        <label htmlFor="person">
                                            <strong>+ Adicionar personalização - R$15.00</strong>
                                        </label>

                                        <div>
                                            <label>
                                                <span>Seu nome ou do jogador preferido: </span>
                                                <input type="text" id="nome" name="nome" placeholder='Nome: '/>
                                            </label>
                                            <label>
                                                <span>Número: </span>
                                                <input type="number" id="numero" name="numero" placeholder="Número: "/>
                                            </label>
                                        </div>

                                    </div>

                                    <div className={styles.addCarrinho}>
                                        <strong>Total: R$XXX.XX</strong>

                                        <button type="button">
                                            <img src="/images/adicionar-carrinho-white.png" alt="Adicionar ao carrinho" />  Adicionar ao Carrinho
                                        </button>
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