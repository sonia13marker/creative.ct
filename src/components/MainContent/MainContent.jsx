import style from './style.module.css'
import arrow from '../../images/arrow.svg';
import { Link } from 'react-router-dom';


export function MainContent () {
    return <>
    <main className={style.main}>
    <div className={style.leftBlock}>
     <div className={style.main__alltext}>
             <div className={style.posit}><h1 className={style.main__h1}>Creative.CT - </h1></div>
             <span className={style.main__yel}></span>
             <h2 className={style.main__h2}>твое творческое</h2>
             <h2 className={style.main__h2}>состязание</h2>
             <Link to="/contests"><span className={style.main__btn}>Продолжить <span className={style.btn__arr}><img src={arrow} alt='arrow'/> </span></span></Link>
         </div>
         <hr className={style.main__line}></hr>
     </div> 
     
     <div className={style.rightBlock}></div>
    </main>

    <div className={style.marquee_container}>
    <span className={style.text}> ● твое творческое состязание ● твое творческое состязание ● твое творческое состязание </span>
    <span className={style.marquee} aria-hidden> ● твое творческое состязание </span>  
    </div>
    </>}


