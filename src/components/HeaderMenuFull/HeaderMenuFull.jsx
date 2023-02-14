import style from './style.module.css';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { MenuHamb } from '../MenuHamb/MenuHamb';
import { MenuFull } from '../MenuFull/MenuFull';

export function HeaderMenuFull () {
    return <div className={style.wrap}>
    <nav className={style.wrap__nav}>

    <MediaQuery maxWidth={699}>
    <Link to="/creative.ct"><span className={style.nav__logo}></span></Link>
    </MediaQuery>

        <MediaQuery minWidth={700}>
            <MenuFull/>
        </MediaQuery>
       
        <MediaQuery maxWidth={699}> 
            <MenuHamb/>
        </MediaQuery>
        
        <MediaQuery minWidth={700}>
        <span className={style.nav__span}>
            <button className={style.span__btn}><p className={style.btn__t}>Войти в аккаунт</p></button>
        </span>
        </MediaQuery>
    </nav>
</div>
}