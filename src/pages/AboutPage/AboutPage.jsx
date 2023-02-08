import style from './style.module.css';
import ruslan from '../../images/ruslan_img.jpg';
import sonya from '../../images/sonya_img.jpg';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { Footer } from '../../components/Footer/Footer';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';
import { ResultsPage } from '../ResultsPage/ResultsPage'; 

export function AboutPage () {
    return (<div className={style.wr}>

            <HeaderMenuFull />

            <div className={style.wrapper}>
                <section className={style.section_text}>
                    <h2 className={style.text__h2}>О проекте</h2>
                    <p className={style.text__p}>
                    Проект был выполнен по инициативе обучающихся Интенсивов Академии Яндекс, в 2023 году. Разработка проекта началась в октябре 2022 года и закончилась в феврале 2023. Фронтенд сделан на React.js, а бэкенд - на Python (дописать на чем конкретно).   
                    </p>
                </section>
                <div className={style.block__members}>
                    <span className={style.members}>
                        <img src={ruslan} alt="фото участника"/>
                        
                        <span className={style.members__media}>
                            <h3 className={style.members__h3}>Руслан Галеев</h3>
                            <span className={style.members__post}>БЭкенд</span>
                            <p className={style.media__links}><a href="https://t.me/Gruslans" target="blank">Telegram: @gruslan</a></p>
                            <p className={style.media__links}><a href="https://github.com/GRusl" target="blank">GitHub: @GRusl</a></p>
                            <p className={style.media__links}><a href="https://vk.com/galeev.ruslan" target="blank">VK: Руслан Галеев</a></p>
                        </span>
                    </span>

                    <span className={style.members}>
                        <img src={sonya} alt="фото участника"/>

                        <span className={style.members__media}>
                            <h3 className={style.members__h3}>Софья Моисеева</h3>
                            <span className={style.members__post}>Фронтенд</span>
                            <p className={style.media__links}><a href="https://t.me/username_marker" target="blank">Telegram: @marker</a></p>
                            <p className={style.media__links}><a href="https://github.com/sonia13marker" target="blank">GitHub: @sonia13marker</a></p>
                            <p className={style.media__links}><a href="https://vk.com/mmarkerr" target="blank">VK: Софья Маркер</a></p>
                        </span>
                    </span>
                </div>
            </div>



        <MediaQuery minWidth={576}>
            <Footer/>
        </MediaQuery>
        <MediaQuery maxWidth={575}> 
            <FooterSmall />
        </MediaQuery>
{/* 
        <ResultsPage></ResultsPage> */}
    </div>

    )
}