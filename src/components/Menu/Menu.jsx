import style from './style.module.css';
import classnames from "classnames";
import { Link } from 'react-router-dom';

export const Menu = ({active, setActive}) => {
    return (
        <div className={classnames(style.menu, active?style.active:'')} onClick={() => setActive(false)}>
            <div className={style.menu__content} onClick={e => e.stopPropagation()}>

                <ul className={style.one_ul}>
                    <li><Link to="/#">Главная</Link></li>
                    <li><Link to="/#">Правила</Link></li>
                    <li><Link tof="/#">Конкурсы</Link></li>
                    <li><Link to="/#">О проекте</Link></li>
                    <li><Link to="/#">Войти в аккаунт</Link></li>
                </ul>
            </div>

        </div>
    )
}