import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import CardProduct from '../components/CardProduct'
import CardTestimony from '../components/CardTestimony'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | 442Mantos</title>
      </Head>
      <Navbar />
      <header>
        <Container>
          <Row>
            <Col sm="6">
              <span className={styles.subtitle}>Subtitle here</span>
              <h1 className={styles.title}>Title Here</h1>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              
              <Link href="/about"><a className={styles.btn_header}>Saiba mais</a></Link>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <Image src="/images/bg-home-header.png" width={416} height={396} alt="Imagem da camisa" />
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <section className={styles.containerInfo}>
          <Container>
            <Row className={styles.rowInfo}>
              <Col md="3">
                <div className={styles.info}>
                  <Image src="/images/entrega.svg" width={71} height={71} alt="Entrega" />
                  <span>Frete grátis para Itabuna</span>
                </div>
              </Col>

              <Col md="3">
                <div className={styles.info}>
                  <Image src="/images/cartao.png" width={71} height={71} alt="Cartão" />
                  <span>Dividimos em até 12x</span>
                </div>
              </Col>

              <Col md="3">
                <div className={styles.info}>
                  <Image src="/images/informacoes.png" width={43} height={43} alt="Redirecionamento Whatsapp" />
                  <span className={styles.mgTop}>Ao finalizar a compra você será redirecionado para o nosso Whatsapp</span>
                </div>
              </Col>

              <Col md="3">
                <div className={styles.info}>
                  <Image src="/images/aviao.png" width={43} height={43} alt="Entrega" />
                  <span className={styles.mgTop}>Entregamos para todo o Brasil</span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.containerProduct}>
          <Container>
            <div className={styles.titleSection}>
              <span>As mais compradas</span>
              <h2>Camisas Populares</h2>
            </div>

            <Row>
              <Col>
                <CardProduct 
                  image="/images/camisa-psg.png"
                  product="Camisa do PSG"
                  price="XXX.XX"
                />
              </Col>
              <Col>
                <CardProduct 
                  image="/images/camisa-psg.png"
                  product="Camisa do PSG"
                  price="XXX.XX"
                />
              </Col>
              <Col>
                <CardProduct 
                  image="/images/camisa-psg.png"
                  product="Camisa do PSG"
                  price="XXX.XX"
                />
              </Col>
              <Col>
                <CardProduct 
                  image="/images/camisa-psg.png"
                  product="Camisa do PSG"
                  price="XXX.XX"
                />
              </Col>
            </Row>

            <Link href="/catalog"><a className={styles.btn_product}>Veja nossos produtos</a></Link>
          </Container>
        </section>

        <section className={styles.containerTestimony}>
          <Container>
            <div className={styles.titleSection}>
                <h2>Depoimentos</h2>
                <span>Alguns feedbacks dos nossos clientes</span>
            </div>

            <Row>
              <Col>
                <CardTestimony 
                  imageDemo="/images/testimony01.png"
                  imageProfile="/images/testimony01.png"
                  nome="Renata Amaral"
                  nickname="@renata_amaral"
                />
              </Col>

              <Col>
                <CardTestimony 
                  imageDemo="/images/testimony02.png"
                  imageProfile="/images/testimony02.png"
                  nome="José Abrantes"
                  nickname="@jose_abrantes"
                />
              </Col>

              <Col>
                <CardTestimony 
                  imageDemo="/images/testimony01.png"
                  imageProfile="/images/testimony01.png"
                  nome="Renata Amaral"
                  nickname="@renata_amaral"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default Home
