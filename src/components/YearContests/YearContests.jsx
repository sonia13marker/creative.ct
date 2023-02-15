import style from './style.module.css';
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