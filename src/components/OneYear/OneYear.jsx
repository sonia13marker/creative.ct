import { OneYearContest } from '../OneYearContest/OneYearContest';
import style from './style.module.css'
import arrow_top from '../../images/arrow__list_top.svg';


export function OneYear(innf){
    console.log(innf);
    
    return <div className={style.preekol}>
      {/*аккордеон */}
      <div className={style.accordion}>
        <div className={style.accordeon__item}>
          <div className={style.accordeon__title}>

                  {/*год и стрелка для раскрытия */}
            <span className={style.arrow_wrap}>
              <p>2023</p>
              <span className={style.year__arrow_top}><img src={arrow_top} alt=""/></span>  
            </span>
          </div>
        </div>
      </div>
      

        {Object.values(innf).map((inf, id) => {
        console.log(inf)
          return <OneYearContest key={id} {...inf} />;
        })}
      </div>
}