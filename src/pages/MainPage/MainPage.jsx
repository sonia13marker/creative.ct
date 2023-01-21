import style from './style.module.css';
import arrow from '../../images/arrow.svg';
// import ellipse from '../../images/ellipse.png';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { MenuHamb } from '../../components/MenuHamb/MenuHamb';
import MediaQuery from 'react-responsive';



export function MainPage () {
    return <div>
        <MediaQuery minWidth={700}>
            <HeaderMenuFull />
        </MediaQuery>
        <MediaQuery maxWidth={320}>
            <MenuHamb/>
        </MediaQuery>

        <main className={style.main}>
           <div className={style.leftBlock}>
            <div className={style.main__alltext}>
                    <h1 className={style.main__h1}>Creative.CT - </h1>
                    <h2 className={style.main__h2}>твое творческое</h2>
                    <h2 className={style.main__h2}>состязание</h2>
                    <button className={style.main__btn}>Подать заявку <span className={style.btn__arr}></span><img src={arrow} alt='arrow'/></button>
                </div>
                <hr className={style.main__line}></hr>
            </div> 
            
            <div className={style.rightBlock}></div>
        </main>
        <div className={style.blackline}></div>
        {/* <div className={style.blackline}>
        <span className={style.line__text}>твое творческое состязание <img src={ellipse} alt='ellips'/> твое творческое состязание <img src={ellipse} alt='ellips'/> твое творческое состязание <img src={ellipse} alt='ellips'/> твое творческое состязание <img src={ellipse} alt='ellips'/> твое творческое состязание <img src={ellipse} alt='ellips'/></span>
        </div> */}

    </div>
}