import style from './style.module.css';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { Footer } from '../../components/Footer/Footer';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';
import { Timer } from '../../components/Timer/Timer';

export function SubmitRequestPage () {
    return (<div className={style.wt}>

            <HeaderMenuFull />

        <div className={style.wrapper}>

        <Timer stageCompetition={1}></Timer>

        <section className={style.wrapper__form}>
                {/*в action указать ссылку на обработку формы (бэк) */}
                <form action="" method="post" className={style.form__wrp}>
                <span>
                    <label>
                    Расскажи о своем проекте:
                        <textarea className={style.input_textarea} placeholder="Не более 350 символов" name="description" id="form__textarea" maxlength="350"></textarea>
                    </label>
                </span>

                    <span className={style.span_inputs}>
                        <label>
                        Ссылка на проект:
                            <input className={style.input_link} placeholder="https://example.com" name="project_link" id="form__input_link"/>
                        </label>
                        {/*это сделано для стилизации кнопки "добавить фото" */}
                        <p className={style.label__desc}>Прикрепи главную картинку проекта: </p>
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