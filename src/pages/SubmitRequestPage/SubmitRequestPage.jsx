import style from './style.module.css';
import Countdown from 'react-countdown';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { Footer } from '../../components/Footer/Footer';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';

export function SubmitRequestPage () {
    return (<div>

            <HeaderMenuFull />

        <div className={style.wrapper}>

        <section className={style.wrapper__timer}>
            <h2 className={style.timer__h2}>До конца этапа подачи заявок</h2>
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

        <section className={style.wrapper__form}>
                {/*в action указать ссылку на обработку формы (бэк) */}
                <form action="" method="post" className={style.form__wrp}>
                <span>
                    <label>
                    Расскажи о своем проекте:
                        <textarea className={style.input_textarea} placeholder="Не более 500 символов" name="description" id="form__textarea" maxlength="500"></textarea>
                    </label>
                </span>

                    <span className={style.span_inputs}>
                        <label>
                        Ссылка на проект:
                            <input className={style.input_link} placeholder="https://example.com" name="project_link" id="form__input_link"/>
                        </label>
                        {/*это сделано для стилизации кнопки "добавить фото" */}
                        <p>Прикрепи главную картинку проекта: </p>
                        <label for="form__input_file" className={style.button_label}>Add file</label>
                            <input type="file" className={style.input_file} name="photo" id="form__input_file"/>
                        
                        <p className={style.input__annotation}>Важно: картинка не должна содержать ненормативной лексики, размер не должен превышать 20 МБ.</p>
                    </span>

                    {/* <input type="submit" className={style.btn_23} value="Подать заявку" id="form__submit"/>
                    <span class="text">Подать заявку</span>
                    <span class="marquee" aria-hidden>Подать заявку</span>   */}
                    <button type="submit" className={style.btn_23} id="form__submit">
                        <span className={style.text}>Подать</span>
                        <span className={style.marquee} aria-hidden>Подать</span>  
                    </button>

                </form>
        </section>
        </div>
        <MediaQuery minWidth={576}>
            <Footer/>
        </MediaQuery>
        <MediaQuery maxWidth={575}> 
            <FooterSmall />
        </MediaQuery>

    </div>

    )
}