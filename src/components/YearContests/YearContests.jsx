import { OneYearContest } from '../OneYearContest/OneYearContest';
import style from './style.module.css';
import arrow_bottom from '../../images/arrow__list_bottom.svg';
import arrow_top from '../../images/arrow__list_top.svg';
import { OneYear } from '../OneYear/OneYear';

/*тут отображение всех конкурсов за один год */
export function YearContests ({inf}) {
console.log(inf)
    return (<>
        {/*контейнер для одинаковых отступов от краев*/}
        <div className={style.container}>

            {/*контейнер с годом и стрелкой списка */}
            <section className={style.container__year}>
                <span className={style.layout}>
                    <h2 className={style.year__h2}>
                    {Object.values(inf).map((innf, ids) => {
          return <OneYear key={ids} {...innf} />;
        })}
                    </h2>
                    <span className={style.year__arrow_top}><img src={arrow_top} alt=""/></span>
                </span>
                
            </section>

            <div>
                {/* {
                    information.length > 0 && information.map((information) => (
                        <span key={information.id}>
                            <p>{information.year}</p>
                            <p>{information.name}</p>
                            <p>{information.status}</p>
                            <p>{information.date}</p>
                        </span>
                    ))
                } */}
            </div>
        </div>
    </>)
}