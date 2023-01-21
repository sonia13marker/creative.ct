import style from './style.module.css';
import logo_img from '../../images/logo.svg';

export function HeaderMenuFull () {
    return <div className={style.wrap}>
    <nav className={style.wrap__nav}>
        <span className={style.nav__logo}>
        <img  src={logo_img} className={style.logo__img} alt="logo"/>
        </span>
        <ul className={style.nav__ul}> 
            <li><a href="/#" className={style.nav__link}>Правила</a></li>
            <li><a href="/#" className={style.nav__link}>Конкурсы</a></li>
            <li><a href="/#" className={style.nav__link}>О проекте</a></li>
        </ul>
        <span className={style.nav__span}>
            <button className={style.span__btn}><p className={style.btn__t}>Войти в аккаунт</p></button>
        </span>
    </nav>
</div>
}