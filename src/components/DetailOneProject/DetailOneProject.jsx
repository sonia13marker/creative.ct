import style from './style.module.css';
import plug from '../../images/plug.png';
import { ProjectVoteButton } from '../ProjectVoteBtn/ProjectVoteBtn';
import { useState } from 'react';

export function DetailOneProject ({name, description, project_link}) {
    return (<>
    {/*попробовать сделать - если символов больше чем 270, то текст урезать и в конец добавлять "..."*/}
    
                <div className={style.project__wrapper}>
                <p className={style.project__name}>{name}</p>

                <p className={style.project__description}>{description}</p>

                <span className={style.project__link}>
                Ссылка на проект:     
                    <a href={project_link}>
                        {project_link}
                    </a>
                </span>

                <img src={plug} className={style.project__img} alt="project"/>
                
                <ProjectVoteButton />
                </div>



    </>

    )
}