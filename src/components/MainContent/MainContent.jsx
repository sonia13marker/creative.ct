import style from './style.module.css'
import arrow from '../../images/arrow.svg';



export function MainContent () {
    return <><main className={style.main}>
    <div className={style.leftBlock}>
     <div className={style.main__alltext}>
             <div className={style.posit}><h1 className={style.main__h1}>Creative.CT - </h1></div>
             <span className={style.main__yel}></span>
             <h2 className={style.main__h2}>твое творческое</h2>
             <h2 className={style.main__h2}>состязание</h2>
             <button className={style.main__btn}>Подать заявку <span className={style.btn__arr}></span><img src={arrow} alt='arrow'/></button>
         </div>
         <hr className={style.main__line}></hr>
     </div> 
     
     <div className={style.rightBlock}></div>
    </main>
    <div className={style.marquee_container}>
        <p className={style.marquee}>
        ●    твое творческое состязание    ●    твое творческое состязание    ●    твое творческое состязание    ●    твое творческое состязание    ●
        </p>
        <p className={style.marquee_2}>
        ●    твое творческое состязание    ● 
        </p>
    </div>
    </>}


