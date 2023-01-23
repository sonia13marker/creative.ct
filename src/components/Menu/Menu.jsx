import style from './style.module.css';
import classnames from "classnames";

export const Menu = ({active, setActive}) => {
    return (
        <div className={classnames(style.menu, active?style.active:'')} onClick={() => setActive(false)}>
            <div className={style.menu__content} onClick={e => e.stopPropagation()}>

                <ul className={style.one_ul}>
                    <li><a href="/#">Главная</a></li>
                    <li><a href="/#">Правила</a></li>
                    <li><a href="/#">Конкурсы</a></li>
                    <li><a href="/#">О проекте</a></li>
                    <li><a href="/#">Войти в аккаунт</a></li>
                </ul>
            </div>

        </div>
    )
}