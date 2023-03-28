import style from './style.module.css';
import MediaQuery from 'react-responsive';
import {HeaderMenuFull} from '../../components/HeaderMenuFull/HeaderMenuFull';
import informations from '../../constants/mock.json';
import {FooterSmall} from '../../components/FooterSmall/FooterSmall';
import {Footer} from '../../components/Footer/Footer';
import {OneYear} from "../../components/OneYear/OneYear";

/*тут будет инфа о всех конкурсах (то есть инфа о всех годах)*/

export function ContestPage() {
    return (
        <div className={style.wr}>
            <HeaderMenuFull/>

            {/*тут будет инфа о всех конкурсах*/}
            <div className={style.container}>
                <h2 className={style.container__h2}>Конкурсы</h2>

                <div className={style.prikol}>
                    {/* {
                        Object.entries(informations).sort((first, second) => second[0] - first[0])
                    } */}
                    {Object.entries(informations).sort((first, second) => second[0] - first[0]).map(([key, value]) => (
                        <OneYear
                            key={key}
                            year={key}
                            items={value}/>
                    ))}
                </div>
            </div>

            <MediaQuery minWidth={576}>
                <Footer/>
            </MediaQuery>
            <MediaQuery maxWidth={575}>
                <FooterSmall/>
            </MediaQuery>
        </div>
    );
}