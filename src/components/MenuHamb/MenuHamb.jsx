import style from './style.module.css'

export function MenuHamb () {
    return <div className={style.wrap}>
    <span className={style.wrap__nav}>
        <span className={style.nav__logo} />
       


        <nav role="navigation" className={style.mh}>
                    <div className={style.menu_toggle}><span>Menu</span></div>
                    <ul className={style.menu}>
                        <li><a href="/#" className={style.navigation__link}>Правила</a></li>
                        <li><a href="/#" className={style.navigation__link}>Конкурсы</a></li>

                        <li><a href="/#" className={style.navigation__link}><span>О проекте</span></a></li>
                        <li><a href="/#" className={style.navigation__link}><span>Войти в аккаунт</span></a></li>
                      </ul>
                    </nav>



    </span>
</div>
}