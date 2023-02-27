import style from './style.module.css';
import arrow_top from '../../images/arrow__list_top.svg'
import { Link } from 'react-router-dom';
import { GoBtn } from '../GoBtn/GoBtn';
import { DetailYearContest } from '../DetailYearContest/DetailYearContest';

/*тут отображение деталей одного конкурса за определенный год */
export function OneYearContest ({name, status, date, statusInNumber}) {
    // console.log(inpf)

    
    return (<>

        {/*инфа в виде блоков в раскрывающемся списке */}

        <div>
        {/* {Object.values(inpf).map((indf, id) => {
    console.log(indf)
    return <DetailYearContest key={id} {...indf}>
         
    </DetailYearContest>;
    })}
        </div> */}
        {/* <div className={style.container__info}> */}
                    
        {/*верхняя полоска с названием и статусом конкурса */}
        <div className={style.info}>
            <h2 className={style.info__name}>{name}</h2>
            <span className={style.line}></span>
            <h4 className={style.info__status}>{status}</h4>
        </div>

        {/*нижняя полоска с кнопкой и датой проведения */}
        <div className={style.container__date}>
            
            <GoBtn statusInNumber={statusInNumber}/>
            <p className={style.date}>{date}</p>
        </div>
    {/*конец инфы в виде блоков */}  
    </div>
 </>

)}