import style from './style.module.css';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { Footer } from '../../components/Footer/Footer';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';
import { OneProjectResult } from '../../components/OneProjectResult/OneProjectResult'; 
import winners from '../../constants/mock1.json';
import { ProjectResults } from '../../components/ProjectResults/ProjectResults';

export function ResultsPage () {
    return (<div className={style.yoi}>

            <HeaderMenuFull />

        <main>
            {/*полоска с заголовоком */}
            <div className={style.title_line}>
                <h2 className={style.title__h2}>Результаты</h2>
                <div className={style.line__wrap}>
                    {/*значения должны подставляться*/}
                    <h2 className={style.title__h2}>Django</h2>
                    <h2 className={style.title__h2}>#2023</h2>
                </div>
            </div>


            {
            Object.values(winners).map((winner, id) => {
                console.log(winner)
                return <div key={id} className={style.pop}><ProjectResults winner={winner}></ProjectResults>
                </div>}
            )}
        </main>

        <MediaQuery minWidth={576}>
            <Footer/>
        </MediaQuery>
        <MediaQuery maxWidth={575}> 
            <FooterSmall />
        </MediaQuery>
    </div>)
}