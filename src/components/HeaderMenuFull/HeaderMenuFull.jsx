import style from './style.module.css';
import { Link } from 'react-router-dom';


export function HeaderMenuFull () {
    return <div className={style.wrap}>
    <nav className={style.wrap__nav}>
        <Link to="/"><span className={style.nav__logo}></span></Link>
        {/* <ul className={style.nav__ul}> 
            <li><a href="/rules" className={style.nav__link}>Правила</a></li>
            <li><a href="/contests" className={style.nav__link}>Конкурсы</a></li>
            <li><a href="/about" className={style.nav__link}>О проекте</a></li>
        </ul> */}
            <ul className={style.nav__ul}> 
            <li><Link to="/rules" className={style.nav__link}>Правила</Link></li>
            <li><Link to="/contests" className={style.nav__link}>Конкурсы</Link></li>
            <li><Link to="/about" className={style.nav__link}>О проекте</Link></li>
        </ul>
        <span className={style.nav__span}>
            <button className={style.span__btn}><p className={style.btn__t}>Войти в аккаунт</p></button>
        </span>
    </nav>
</div>
}