import { OneYearContest } from '../OneYearContest/OneYearContest';
import style from './style.module.css';
import arrow_bottom from '../../images/arrow__list_bottom.svg';
import arrow_top from '../../images/arrow__list_top.svg';
import { OneYear } from '../OneYear/OneYear';

/*тут отображение всех конкурсов за один год */
export function YearContests ({inf}) {
    return (<>


            {/*контейнер с годом и стрелкой списка */}
            <section>
                <span>

                    <h2 className={style.year__h2}>
                    {Object.values(inf).map((innf, ids) => {
                        console.log(innf)
          return (<OneYear key={ids} {...innf}/>);
        })}
       
                    </h2>
                    
                </span>
                
            </section>
    </>)
}