import style from './style.module.css';
import classnames from "classnames";
import { Link } from 'react-router-dom';

export const Menu = ({active, setActive}) => {
    return (
       <div >
            <div className={active ? classnames(style.menu, style.active) : style.menu} onClick={() => setActive(false)}>
                    <div className={style.menu__content} onClick={e => e.stopPropagation()}>
                    <ul className={style.one_ul}>
                        <li><Link to="/creative.ct">Главная</Link></li>
                        <li><Link to="/rules">Правила</Link></li>
                        <li><Link tof="/contests">Конкурсы</Link></li>
                        <li><Link to="/about">О проекте</Link></li>
                        <li><Link to="/#">Войти в аккаунт</Link></li>
                    </ul>
                    </div>

                
                {/*  */}
            </div>

        </div>
    )
}