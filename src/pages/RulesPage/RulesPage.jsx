import MediaQuery from 'react-responsive';
import { Footer } from '../../components/Footer/Footer';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import style from './style.module.css';

export function RulesPage () {
    return <div>
        <HeaderMenuFull/>
        <div className={style.container}>
            <h2 className={style.container__h2}>
            Перед участием в конкурсе <br/> обязательно ознакомьтесь с нашими <span className={style.h2__span}>правилами</span>
            </h2>
            
            <div className={style.rules_cont}>
                {/*rule 1 */}
                <span className={style.rule}>
                    <span className={style.rules__header}>
                    <p>Как можно участвовать?</p>
                    <p className={style.rules__span}>#правило_1</p>
                    </span>
                    <span className={style.rules__text}>
                    <p>Загрузи информацию и ссылку на свой проект в форму отправки заявок. Редактировать заявку после отправки <p className={style.rules__span1}>нельзя.</p></p>
                    </span>
                </span>

                    <hr/>

                {/*rule 2 */}
                <span className={style.rule}>
                    <span className={style.rules__header}>
                    <p>Что делать с проектами других участников?</p> 
                    <p className={style.rules__span}>#правило_2</p>
                    </span>
                    <span className={style.rules__text}>
                    <p>Голосовать! Ты можешь отдать свой голос за любой понравившийся  тебе проект.</p>
                    </span>
                </span>

                    <hr/>

                {/*rule 3 */}
                <span className={style.rule}>
                    <span className={style.rules__header}>
                    <p>А дальше что?</p> 
                    <p className={style.rules__span}>#правило_3</p>
                    </span>
                    <span className={style.rules__text}>
                    <p>Жди выгрузки результатов на сайт по истечении срока голосования.</p>
                    </span>
                </span>

                    <hr/>

                {/*rule 4 */}
                <span className={style.rule}>
                    <span className={style.rules__header}>
                    <p className={style.attention}>#важно</p> 
                    </span>
                    <span className={style.rules__text}>
                    <p>Отдать свой голос можно только <span className={style.rules__span1}>один раз,</span> выбирай сердцем и душой! </p>
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
    </div>
}