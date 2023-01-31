import style from './style.module.css';
import plug from '../../images/plug.png';
import { ProjectVoteButton } from '../ProjectVoteBtn/ProjectVoteBtn';

export function OneProject ({infos}) {
    return (<div className={style.wrapper}>
                <div className={style.grid__project}>
                { infos.map((infos) => 
                { return (<>
                <p className={style.project__name}>
                    {infos.name} 
                </p>
                <p className={style.project__description}>
                    {infos.description}
                </p>
                <span className={style.project__link}>
                    Ссылка на проект:     
                    <a href="/#">
                     {infos.project_link}
                    </a>
                    </span>
                    
                    <img src={plug} className={style.project__img} alt="project photo"/>
                    
                    <ProjectVoteButton/>
                </>)}) }
                

                    

                </div>

    </div>)
}