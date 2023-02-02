import { OneYearContest } from '../OneYearContest/OneYearContest';
import style from './style.module.css';

/*тут отображение всех конкурсов за один год */
export function YearContests ({informations}) {
console.log(informations)
    return (<>
        {/*контейнер для одинаковых отступов от краев*/}
        <div className={style.container}>

            {/*контейнер с годом и стрелкой списка */}
            <div className={style.container__year}>
                {
                    informations.map((year) => (
                         <p>{year}</p>
                    ))
                }
            {/* {informations.map((info, i) => (
                    <section key={i}  className={style.grid__project}>
                    <DetailOneProject {...info} />
                    </section>
                 ))} */}

                {informations.year || "Еще ничего не было:("}
            </div>
        {/* {
            contents.map((content, i) => {
                <OneYearContest key={i} {...infos.content}/>
            })

        } */}
            {/*контейнер с годом и стрелкой списка */}
            <div className={style.container__year}>

            </div>

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