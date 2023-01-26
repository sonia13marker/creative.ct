import style from './style.module.css';


export function HeaderMenuFull () {
    return <div className={style.wrap}>
    <nav className={style.wrap__nav}>
        <a href="/"><span className={style.nav__logo}></span></a>
        <ul className={style.nav__ul}> 
            <li><a href="/rules" className={style.nav__link}>Правила</a></li>
            <li><a href="/contests" className={style.nav__link}>Конкурсы</a></li>
            <li><a href="/about" className={style.nav__link}>О проекте</a></li>
        </ul>
        <span className={style.nav__span}>
            <button className={style.span__btn}><p className={style.btn__t}>Войти в аккаунт</p></button>
        </span>
    </nav>
</div>
}