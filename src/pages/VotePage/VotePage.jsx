import style from './style.module.css';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { AllProjects } from '../../components/AllProjects/AllProjects';
import { Footer } from '../../components/Footer/Footer';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';
import { Timer } from '../../components/Timer/Timer';


export function VotePage () { 

    let timeTimer = "2023-03-20T00:00:00";

    return (<div className={style.wp}>

            <HeaderMenuFull />

        {/* таймер*/}
{/* пыталась передавать дату вот так: 
dates={"2023-03-15T00:00:00"}*/}
        <Timer stageCompetition={3} time={timeTimer}/>

        {/*основная часть - сетка с проектами */}
        <AllProjects></AllProjects>
        


        <MediaQuery minWidth={576}>
            <Footer/>
        </MediaQuery>
        <MediaQuery maxWidth={575}> 
            <FooterSmall />
        </MediaQuery>

    </div>)
}