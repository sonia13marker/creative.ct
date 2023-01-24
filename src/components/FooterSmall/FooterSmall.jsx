import style from './style.module.css';

export function FooterSmall () {
    return <div className={style.main_wrap}>
    <span className={style.wrap__logo}> </span>
    <button className={style.wrap__btn}>Войти в аккаунт</button>


            <span><a href="creative.ct/" className={style.wrap__link}>Главная</a></span>
            <span><a href="/rules" className={style.wrap__link}>Правила</a></span>
            <span><a href="/#" className={style.wrap__link}>Конкурсы</a></span>
            <span><a href="/#" className={style.wrap__link}>О проекте</a></span>



</div>
}