import { Rating } from '@mui/material';
import React from 'react';
import styles from './styles.module.css';

type CardTestimonyData = {
    imageDemo: string;
    imageProfile: string;
    nome: string;
    nickname: string;
}

function CardTestimony( props: CardTestimonyData){
    return(
        <div className={styles.containerCard}>
            <div className={styles.front}>
                <img src={props.imageDemo} alt="Depoimento" />

                <div className={styles.info}>
                    <img src={props.imageProfile} alt="Perfil" />
                    <div className={styles.profile}>
                        <strong>{props.nome}</strong>
                        <span>{props.nickname}</span>
                    </div>
                </div>
            </div>
            <div className={styles.back}>
                <div className={styles.info}>
                    <img src={props.imageDemo} alt="Perfil" />
                    <div className={styles.profile}>
                        <strong>{props.nome}</strong>
                        <span>{props.nickname}</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                
                <div className={styles.feedback}>
                    <strong>Avaliação: </strong>
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                </div>
            </div>
        </div>
    )
}

export default CardTestimony;