import style from './style.module.css';

export function SubmitRequest () {
    return (<div>
        <div className={style.wrapper}>
        <section className={style.wrapper__timer}></section>

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
                        <label>
                        Прикрепи главную картинку проекта:
                        <span>Add file
                            <input type="file" className={style.input_file} name="photo" id="form__input_file"/>
                        </span>
                        </label>
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
        
    </div>

    )
}