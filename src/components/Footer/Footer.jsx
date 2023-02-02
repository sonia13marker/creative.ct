import style from './style.module.css';

export function Footer () {
    return <div className={style.main_wrap}>
        <span className={style.wrap__logo}> </span>
        <span className={style.wrap__content}>
            <ul>
                <li className={style.one}><a href="creative.ct/" className={style.content__link}>Главная</a></li>
                <li className={style.one}><a href="/rules" className={style.content__link}>Правила</a></li>
                <li className={style.two}><a href="/contests" className={style.content__link}>Конкурсы</a></li>
                <li className={style.two}><a href="/about" className={style.content__link}>О проекте</a></li>
            </ul>
            <button className={style.content__btn}>Войти в аккаунт</button>
        </span>
    </div>
}