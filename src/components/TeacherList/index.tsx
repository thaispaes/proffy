import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem (){
    return(
        <article className="teacher-item">
    <header>
        <img src="https://avatars2.githubusercontent.com/u/4248081?s=460&u=98a643ad7f90c7950d9311e4b5a762fe77af8ada&v=4" />
        <div>
            <strong>Filipe Deschamps</strong>
            <span>Matemática </span>
        </div>  
    </header>
    <p>
        Aulas de Matemática bem estruturadas e expositiva.
        <br /> <br />
         Estude para o ENEM e Vestibulares no Melhor Cursinho com o Melhor Preço.
         Pague em até 12x. ENEM com a melhor preparação. Parcelas por menos de R$
        15 reais.
    </p>

    <footer>
        <p>
            Preço/Hora
            <strong>R$ 80,00 </strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>

    </footer>
</article>
    );
}

export default TeacherItem;