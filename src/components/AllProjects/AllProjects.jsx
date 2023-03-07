import projects from '../../constants/mock2.json';
import style from './style.module.css';
import { OneProject } from '../OneProject/OneProject';



export function AllProjects () {
    return (<div>
        
        <div className={style.container}>
            <div className={style.container__header}>
                <h2 className={style.header__h2}>Голосование</h2>
                {/*тут будет пропс года (?) */}
                <h2 className={style.header__h2}>Django, 2023</h2>
            </div>

                <div>
            {
                Object.values(projects).map((proj, id) => 
                 <OneProject proj={proj}/>)
            }
                </div>

        </div>

    </div>)
}