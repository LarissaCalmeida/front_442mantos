import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

type CardCatalogData = {
    name: string;
    price: string;
    image: string;
}

function CardCatalog(props: CardCatalogData){
    return(
        <div className={styles.containerCard}>
            <Link href="/product">
            <a>
                <img src={props.image} alt={props.name} />
            </a>
            </Link>
            <span className={styles.nameProduct}>{props.name}</span>

            <div className={styles.info}>
                <div>
                    <strong>R${props.price}</strong>
                    <span>12x de XX.XX</span>
                </div>

                <button type="button">
                    <img src="/images/adicionar-carrinho.png" alt="Adicionar ao Carrinho" />
                </button>
            </div>
        </div>
    );
}

export default CardCatalog;