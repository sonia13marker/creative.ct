import style from './style.module.css';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { Footer } from '../../components/Footer/Footer';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';
import { OneProjectResult } from '../../components/OneProjectResult/OneProjectResult'; 

export function ResultsPage () {
    return (<div>

            <HeaderMenuFull />

        <main>
            <OneProjectResult></OneProjectResult>

        </main>

        <MediaQuery minWidth={576}>
            <Footer/>
        </MediaQuery>
        <MediaQuery maxWidth={575}> 
            <FooterSmall />
        </MediaQuery>
    </div>)
}