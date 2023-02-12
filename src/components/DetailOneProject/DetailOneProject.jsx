import style from './style.module.css';
import plug from '../../images/plug.png';
import { ProjectVoteButton } from '../ProjectVoteBtn/ProjectVoteBtn';

export function DetailOneProject ({name, description, project_link}) {
    return (<>
                <div className={style.project__wrapper}>
                <p className={style.project__name}>{name}</p>

                <p className={style.project__description}>{description}</p>

                <span className={style.project__link}>
                Ссылка на проект:     
                    <a href={project_link}>
                        {project_link}
                    </a>
                </span>

                <img src={plug} className={style.project__img} alt="project photo"/>
                
                <ProjectVoteButton />
                </div>



    </>

    )
}