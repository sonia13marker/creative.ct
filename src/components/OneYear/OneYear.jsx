import { OneYearContest } from '../OneYearContest/OneYearContest';
import style from './style.module.css'
import arrow_top from '../../images/arrow__list_top.svg';
import arrow_bottom from '../../images/arrow__list_bottom.svg';
import { React, useState} from 'react';
import classnames from "classnames";


export function OneYear(innf){
    console.log(innf);

    const [isActive, setIsActive] = useState(false);
    
    return <div className={style.preekol}>
      {/*аккордеон */}

      <div className={style.accordion}>
        <div className={style.accordeon__item}>
          <div className={style.accordeon__title}
          onClick={() => setIsActive(!isActive)}
          >

                  {/*год и стрелка для раскрытия */}
            <span className={style.arrow_wrap}>
              <p>2023</p>
              <span className={style.year__arrow_top}>
                {isActive ? <img src={arrow_top} alt=""/> : <img src={arrow_bottom}/>}
                </span>  
            </span>
          </div>
          { isActive && <div className={style.accordeon__content}>
          {Object.values(innf).map((inf, id) => {
        console.log(inf)
          return <OneYearContest key={id} {...inf} />;
        })}
          </div>}
        </div>
      </div>
      

        
      </div>
}