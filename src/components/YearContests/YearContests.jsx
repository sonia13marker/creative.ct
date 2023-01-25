import style from './style.module.css';

export function YearContests ({information}) {

    return (<>
        {/*контейнер для одинаковых отступов от краев*/}
        <div className={style.container}>

            {/*контейнер с годом и стрелкой списка */}
            <div className={style.container__year}>
                {/* {year || "Еще ничего не было:("} */}
            </div>

            {/*инфа в виде блоков в раскрывающемся списке */}
            <div className={style.container__info}>
                
                {/*верхняя полоска с названием и статусом конкурса */}
                <div className={style.info}>
                    {/* <span className={style.info__name}>{name}</span> */}
                    <hr/>
                    {/* <span className={style.info__status}>{status}</span> */}
                </div>

                {/*нижняя полоска с кнопкой и датой проведения */}
                <div className={style.container__date}>
                    <button className={style.date__btn}>Перейти</button>
                    {/* <span className={style.date}>{date}</span> */}
                </div>
            {/*конец инфы в виде блоков */}  
            </div>

            {/*контейнер с годом и стрелкой списка */}
            {/* <div className={style.container__year}>

            </div> */}

            <div>
                {
                    information.length > 0 && information.map((information) => (
                        <span key={information.id}>
                            <p>{information.year}</p>
                            <p>{information.name}</p>
                            <p>{information.status}</p>
                            <p>{information.date}</p>
                        </span>
                    ))
                }
            </div>
        </div>
    </>)
}