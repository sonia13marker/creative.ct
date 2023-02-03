import style from './style.module.css';
import arrow_top from '../../images/arrow__list_top.svg'

/*тут отображение деталей одного конкурса за определенный год */
export function OneYearContest ({name, status, date}) {

    return (<div className={style.container}>

        {/*инфа в виде блоков в раскрывающемся списке */}
        <div className={style.container__info}>
                    
        {/*верхняя полоска с названием и статусом конкурса */}
        <div className={style.info}>
            <h2 className={style.info__name}>{name}</h2>
            <span className={style.line}></span>
            <h4 className={style.info__status}>{status}</h4>
        </div>

        {/*нижняя полоска с кнопкой и датой проведения */}
        <div className={style.container__date}>
            <a href="" className={style.date__btn}>Перейти</a>
            <p className={style.date}>{date}</p>
        </div>
    {/*конец инфы в виде блоков */}  
    </div>
 </div>

)}