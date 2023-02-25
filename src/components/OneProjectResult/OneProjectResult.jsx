import style from './style.module.css';
import plug from '../../images/plug.png';

export function OneProjectResult ({prize_place, name, description, project_link}) {
    return <div className={style.grid__project}>

                    <div className={style.one__project}>
                        <p className={style.project__place}> {prize_place} </p>
                        <p className={style.project__name}>{name}</p>

                        <p className={style.project__description}>{description}</p>

                        <span className={style.project__link}>
                        Ссылка на проект:     
                            <a href={project_link} target="_blank">
                                {project_link}
                            </a>
                        </span>

                    </div>

                        <img src={plug} className={style.project__img} alt="project"/>
                
                </div>
}