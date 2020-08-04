import React from 'react';
import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherList';


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
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;
