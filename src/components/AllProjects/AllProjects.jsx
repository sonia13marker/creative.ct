
import style from './style.module.css';
import { OneProject } from '../OneProject/OneProject';


export function AllProjects () {

    let infos = [
        {
            "name" : "@prekol_a_ne_name",
            "description" : "Немного информации о проекте: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nisi, blanditiis sint corrupti nam aliquam quaerat aliquid magnam dolores eos neque vitae.",
            "project_link" : "https://cto-to-tipa-ssilki.net"
        },
        // {
        //     "name" : "@prekoe",
        //     "description" : "Немного информации о проекте: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nisi, blanditiis sint corrupti nam aliquam quaerat aliquid magnam dolores eos neque vitae, aliquid magnam dolores eos neque vitae",
        //     "project_link" : "https://cto-to-silki.net"
        // },
        // {
        //     "name" : "@435946jcfoew",
        //     "description" : "Немного информации о проекте: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nisi.",
        //     "project_link" : "https://cto-to-silkigeojfod.net"
        // },
        // {
        //     "name" : "@43foew_12",
        //     "description" : "Немного информации о проекте: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nisi. Немного информации о проекте: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nisi, blanditiis sint corrupti nam aliquam quaerat aliquid magnam dolores eos neque vitae, aliquid magnam dolores eos neque vitae",
        //     "project_link" : "https://lkigeojfod.net"
        // }
    ]
    
    console.log(infos);
    console.log(infos.name);
    return (<div>
        
        <div className={style.container}>
            <div className={style.container__header}>
                <h2 className={style.header__h2}>Голосование</h2>
                {/*тут будет пропс года (?) */}
                <h2 className={style.header__h2}>Django, 2023</h2>
            </div>


            {/*стили для одного проекта */} 
                {/* <div className={style.grid__project}>
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
                

                    

                </div> */}
                <div className={style.grid}>
                    <OneProject infos={infos}/>
                </div>

        </div>

    </div>)
}