import style from './style.module.css';
import { Link } from 'react-router-dom';

export function MenuFull () {
    return <>
            <Link to="/creative.ct"><span className={style.nav__logo}></span></Link>
            <ul className={style.nav__ul}> 
            <li><Link to="/rules" className={style.nav__link}>Правила</Link></li>
            <li><Link to="/contests" className={style.nav__link}>Конкурсы</Link></li>
            <li><Link to="/about" className={style.nav__link}>О проекте</Link></li>
        </ul>
    </>
}