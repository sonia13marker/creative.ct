import style from './style.module.css';
import { Link } from 'react-router-dom';

export function FooterSmall () {
    return <div className={style.main_wrap}>
    <span className={style.wrap__logo}> </span>
    <button className={style.wrap__btn}>Войти в аккаунт</button>


            <span><Link to="/creative.ct" className={style.wrap__link}>Главная</Link></span>
            <span><Link to="/rules" className={style.wrap__link}>Правила</Link></span>
            <span><Link to="/contests" className={style.wrap__link}>Конкурсы</Link></span>
            <span><Link to="/about" className={style.wrap__link}>О проекте</Link></span>



</div>
}