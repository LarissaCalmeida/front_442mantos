import React from 'react';
import styles from './styles.module.css'

type CardProductData = {
    image: string;
    product: string;
    price: string;
}

function CardProduct(props: CardProductData){
    return(
        <div className={styles.containerCard}>
            <div className={styles.circle}></div>

            <img className={styles.imgProduct} src={props.image} alt=""/>
            <strong>{props.product}</strong>

            <div className={styles.description}>
                <span>{props.price}</span>
                <img src="/images/adicionar-carrinho.png" alt="Adicionar ao Carrinho" />
            </div>
        </div>
    )
}

export default CardProduct;