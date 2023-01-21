import style from './style.module.css';
import arrow from '../../images/arrow.svg';
import ellipse from '../../images/ellipse.png';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';

export function MainPage () {
    return <div>
        <HeaderMenuFull />
        <main className={style.main}>
            <div className={style.main__alltext}>
                <h1 className={style.main__h1}>Creative.CT - </h1>
                <h2 className={style.main__h2}>твое творческое</h2>
                <h2 className={style.main__h2}>состязание</h2>
                <button className={style.main__btn}>Подать заявку <span className={style.btn__arr}></span><img src={arrow} alt='arrow'/></button>
            </div>
            <div className={style.main__block}></div>
            <hr className={style.main__line}></hr>
        </main>
        <div className={style.blackline}>
        <span className={style.line__text}>твое творческое состязание <img src={ellipse} alt='ellips'/> твое творческое состязание <img src={ellipse} alt='ellips'/> твое творческое состязание <img src={ellipse} alt='ellips'/> твое творческое состязание <img src={ellipse} alt='ellips'/> твое творческое состязание <img src={ellipse} alt='ellips'/></span>
        </div>

    </div>
}