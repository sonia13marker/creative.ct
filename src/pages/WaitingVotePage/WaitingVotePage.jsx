import style from './style.module.css';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { Footer } from '../../components/Footer/Footer';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';
import { Timer } from '../../components/Timer/Timer';

export function WaitingVotePage () {

    let timeTimer = "2023-03-27T00:00:00";
    return (<div className={style.wo}>

            <HeaderMenuFull />

        <main className={style.main}>
        
        <Timer stageCompetition={0} time={timeTimer}></Timer>

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