import style from './style.module.css';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { Footer } from '../../components/Footer/Footer';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';
import { OneProjectResult } from '../../components/OneProjectResult/OneProjectResult'; 
import winners from '../../constants/mock1.json';

export function ResultsPage () {
    console.log(winners);
    return (<div>

            <HeaderMenuFull />

        <main>
            {
            Object.values(winners).map((winner, id) => {
            return (Object.values(winner).map((win, di)=>{
                console.log(win);
                return (<section key={id} className={style.one_project}>
                    <OneProjectResult win={win}/>
                </section>)
                })
            )})}
        </main>

        <MediaQuery minWidth={576}>
            <Footer/>
        </MediaQuery>
        <MediaQuery maxWidth={575}> 
            <FooterSmall />
        </MediaQuery>
    </div>)
}