import style from './style.module.css';

export function SubmitRequest () {
    return (<div>
        {/*ДОБАВИТЬ методы post, имена и id каждому инпуту, почитать про это в справочнике. 
        Стилизовать кнопку добавления файла, скрыв внутри этой кнопки обычный тег button  */}
        <div className={style.wrapper}>
        <section className={style.wrapper__timer}></section>

        <section className={style.wrapper__form}>
            <span className={style.form__textarea}>

            </span>
            <span className={style.form__wrp}>
                <form>
                    <label>
                    Расскажи о своем проекте:
                        <textarea className={style.input_textarea} placeholder="Не более 300 символов"></textarea>
                    </label>


                    <span className={style.span_inputs}>
                        <label>
                        Ссылка на проект:
                            <input className={style.input_link} placeholder="https://example.com"/>
                        </label>
                        <label>
                        Прикрепи главную картинку проекта:
                        <input type="file" className={style.input_file}/>
                        </label>
                    </span>
                    <input type="submit" className={style.input_submit} value="Подать заявку"/>
                </form>
            </span>
        </section>
        </div>
        
    </div>

    )
}