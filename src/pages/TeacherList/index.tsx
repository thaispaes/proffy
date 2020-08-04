import React from 'react';
import './styles.css';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" className="container">
                    <div className="input-block">
                        <label htmlFor="subject"> Materia </label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day"> Dia da Semana </label>
                        <input type="text" id="week-day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time"> Horario </label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </ PageHeader>
            <main>
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
            </main>
        </div>
    )
}

export default TeacherList;
