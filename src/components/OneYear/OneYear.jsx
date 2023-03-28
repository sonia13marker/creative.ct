import {OneYearContest} from '../OneYearContest/OneYearContest';
import style from './style.module.css'
import arrow_top from '../../images/arrow__list_top.svg';
import arrow_bottom from '../../images/arrow__list_bottom.svg';
import {React, useState} from 'react';


export function OneYear({year, items}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={style.preekol}>
            {/*аккордеон */}
            <div className={style.accordeon__title} onClick={() => setIsActive(!isActive)}>

                {/*год и стрелка для раскрытия */}
                <span className={style.arrow_wrap}>
                  <p className={style.year__p}>#{year}</p>

                  <span className={style.year__arrow_top}>
                      {isActive ? <img src={arrow_top} alt=""/> : <img src={arrow_bottom}/>}
                  </span>
                </span>
            </div>

            {isActive && <div className={style.accordeon__content}>
                {items.map((inf, id) => <OneYearContest key={id} {...inf}/>)}
            </div>}
        </div>
    )
}