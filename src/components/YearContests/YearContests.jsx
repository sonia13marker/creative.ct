import { OneYearContest } from '../OneYearContest/OneYearContest';
import style from './style.module.css';
import arrow_bottom from '../../images/arrow__list_bottom.svg';
import arrow_top from '../../images/arrow__list_top.svg';
import { OneYear } from '../OneYear/OneYear';

/*тут отображение всех конкурсов за один год */
export function YearContests ({inf}) {
console.log(inf)
    return (<>


            {/*контейнер с годом и стрелкой списка */}
            <section className={style.container__year}>
               

                <div className={style.layout}>

                    <div className={style.year__h2}>
{/* 
                    <div className={style.year__wrapper}>
                        {
                            Object.keys(inf).map((inn, id) => 
                            <h2 key={id}>#{inn}</h2>)
                        }
                    </div> */}
                       
                    {Object.values(inf).map((innf, ids) => {
                        console.log(innf)
          return (<OneYear key={ids} {...innf}/>);
        })}
       
                    </div>
                    
                </div>
                
            </section>
    </>)
}