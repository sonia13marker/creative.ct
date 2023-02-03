import style from './style.module.css';
import { Link } from 'react-router-dom';

export function Footer () {
    return <div className={style.main_wrap}>
        <span className={style.wrap__logo}> </span>
        <span className={style.wrap__content}>
            <ul>
                <li className={style.one}><Link to="/creative.ct" className={style.content__link}>Главная</Link></li>
                <li className={style.one}><Link to="/rules" className={style.content__link}>Правила</Link></li>
                <li className={style.two}><Link to="/contests" className={style.content__link}>Конкурсы</Link></li>
                <li className={style.two}><Link to="/about" className={style.content__link}>О проекте</Link></li>
            </ul>
            <button className={style.content__btn}>Войти в аккаунт</button>
        </span>
    </div>
}