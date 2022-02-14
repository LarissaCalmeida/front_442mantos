import React from 'react';
import PageError from '../layout/PageError';

function Error404(){
    return(
        <PageError 
            title="Página não encontrada" 
            description="Desculpe, essa página não existe no nosso servidor"
            image="/images/404.gif"
        />
    );
}

export default Error404;