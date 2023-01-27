import style from './style.module.css';

/*тут отображение деталей одного конкурса за определенный год */
export function OneYearContest ({name, status, date}) {

    return (<div>
        {/*инфа в виде блоков в раскрывающемся списке */}
        <div className={style.container__info}>
                    
        {/*верхняя полоска с названием и статусом конкурса */}
        <div className={style.info}>
            <span className={style.info__name}>{name}</span>
            <hr/>
            <span className={style.info__status}>{status}</span>
        </div>

        {/*нижняя полоска с кнопкой и датой проведения */}
        <div className={style.container__date}>
            <button className={style.date__btn}>Перейти</button>
            <span className={style.date}>{date}</span>
        </div>
    {/*конец инфы в виде блоков */}  
    </div>
 </div>

)}