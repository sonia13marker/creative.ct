import { OneYearContest } from '../OneYearContest/OneYearContest';
import style from './style.module.css'
import arrow_top from '../../images/arrow__list_top.svg';
import arrow_bottom from '../../images/arrow__list_bottom.svg';
import { React, useState} from 'react';
import classnames from "classnames";
import { GoBtn } from '../GoBtn/GoBtn';


export function OneYear({innf}){
    console.log(innf);
    

    return <div>
      {Object.values(innf).map((inpf, di) => {
            return <OneYearContest key={di} {...inpf} />;
          })}

  {/* { isActive && <div className={style.accordeon__content}>
    {Object.values(innf).map((inf, id) => {
    console.log(inf)
    return <OneYearContest key={id} {...inf}>
         
    </OneYearContest>;
    })}
  </div>} */}
        

        
</div>
}