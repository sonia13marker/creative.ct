import style from './style.module.css';
import plug from '../../images/plug.png';

export function OneProjectResult ({win}) {
    return <div className={style.op}> 
                <div className={style.grid__project}>
                    <div className={style.one__project}>
                        <p className={style.project__name}>{win.name}</p>

                        <p className={style.project__description}>{win.description}</p>

                        <span className={style.project__link}>
                        Ссылка на проект:     
                            <a href={win.project_link}>
                                {win.project_link}
                            </a>
                        </span>

                        <img src={plug} className={style.project__img} alt="project"/>
                </div>
                </div>
    </div>
}