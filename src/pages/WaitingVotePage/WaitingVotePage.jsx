import style from './style.module.css';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { MenuHamb } from '../../components/MenuHamb/MenuHamb';
import Countdown from 'react-countdown';
import { Footer } from '../../components/Footer/Footer';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';

export function WaitingVotePage () {
    return (<div>
        <MediaQuery minWidth={700}>
            <HeaderMenuFull />
        </MediaQuery>
        <MediaQuery maxWidth={699}> 
            <MenuHamb/>
        </MediaQuery>

        <main className={style.main}>
        <section className={style.wrapper__timer}>
            <h2 className={style.timer__h2}>До начала этапа голосования</h2>
            <p className={style.timer}>
                {/*год-месяц-день*/}
                <Countdown date="2023-03-15T00:00:00"/>
                <span className={style.timer__desc}>дня</span>
                <span className={style.timer__desc}>часов</span>
                <span className={style.timer__desc}>минут</span>
                <span className={style.timer__desc}>секунд</span>
            </p>
            <span className={style.timer__line}>
                <p>Осталось</p>
            </span>
        </section>

        <p className={style.text}>
        Подождите еще чуть-чуть, и скоро сможете увидеть работы всех участников!
        </p>

        </main>

        <MediaQuery minWidth={576}>
            <Footer/>
        </MediaQuery>
        <MediaQuery maxWidth={575}> 
            <FooterSmall />
        </MediaQuery>
    </div>)
}