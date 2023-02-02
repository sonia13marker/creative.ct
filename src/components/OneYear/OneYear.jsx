import { OneYearContest } from '../OneYearContest/OneYearContest';
import style from './style.module.css'


export function OneYear(gg){
    console.log(gg);
    
    return <div>{Object.values(gg).map((inf, id) => {
        return <OneYearContest key={id} {...inf} />;
      })}</div>
}