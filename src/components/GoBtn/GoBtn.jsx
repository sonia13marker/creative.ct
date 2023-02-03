import style from './style.module.css';
import { Link } from 'react-router-dom';
//хз как сделать

function renderSwitch(status) {
    switch(status) {
      case 'Завершен':
        return <Link to='/results'></Link>;
      case 'Идет подача заявок': 
        return <Link to='/submit'></Link>;
      case 'Голосование': 
        return <Link to='/vote'></Link>;
      case 'Ожидание голосования': 
        return <Link to='/waiting-vote'></Link>;
    }
  }

export function GoBtn ({status}) {
    console.log(status)
    return <span>
        <Link to={renderSwitch()} className={style.date__btn}>Перейти</Link>
    </span>
}