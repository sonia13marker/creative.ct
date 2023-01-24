import style from './style.module.css';

export function Footer () {
    return <div className={style.main_wrap}>
        <span className={style.wrap__logo}></span>
        <span className={style.wrap__content}>
            <ul>
                <li><a href="creative.ct/" className={style.content__link}>Главная</a></li>
                <li><a href="/rules" className={style.content__link}>Правила</a></li>
                <li><a href="/#" className={style.content__link}>Конкурсы</a></li>
                <li><a href="/#" className={style.content__link}>О проекте</a></li>
            </ul>
            <button className={style.content__btn}>Войти в аккаунт</button>
        </span>
    </div>
}