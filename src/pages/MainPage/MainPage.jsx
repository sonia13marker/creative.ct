import style from './style.module.css';
import logo_img from '../../images/logo.svg';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';

export function MainPage () {
    return <div>
        <HeaderMenuFull />
        <main className={style.main}></main>
    </div>
}